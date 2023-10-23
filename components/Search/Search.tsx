import Link from "next/link";
import React from "react";
import lunr from "lunr";
import { Command } from "cmdk";
import { useRouter } from "next/router";
import search from "search.json";
import * as Styled from "./Search.styled";
import { SearchContext } from "./Search.context";

export const useOutsideClick = (
  refs: React.RefObject<HTMLElement>[],
  callback: () => void
) => {
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        refs.every(
          (r) => r.current && !r.current.contains(event.target as Node)
        )
      ) {
        callback();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [refs, callback]);
};

const getPath = (url: string, _type: string) => {
  switch (_type) {
    case "blog":
      return `/blog/${url}/`;
    case "widget":
      return `/widget-catalog/${url}/`;
    default:
      return `/${url}`;
  }
};

const useSearchResults = (input: string) => {
  const blogIndex = React.useMemo(() => {
    return lunr(function () {
      this.ref("url");

      this.field("title", {
        boost: 100,
      });
      this.field("shortExcerpt", {
        boost: 70,
      });
      this.field("longExcerpt", {
        boost: 60,
      });
      this.field("tags", {
        boost: 30,
      });
      this.field("keywords", {
        boost: 30,
      });
      this.field("category", {
        boost: 25,
      });
      this.field("author", {
        boost: 20,
      });
      this.field("url", {
        boost: 15,
      });
      this.field("_type", {
        boost: 10,
      });
      this.field("content", {
        boost: 5,
      });

      search.forEach((doc: any) => {
        this.add(doc);
      }, this);
    });
  }, []);

  return React.useMemo(() => {
    const query = input.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, ""); // remove all symbols. Search twos an error if you enter ~

    if (!query || !blogIndex) {
      return [];
    }

    const lunrResults = blogIndex.search(query + "~1");

    return search
      .filter((post) => lunrResults.find((result) => result.ref === post.url))
      .sort((a, b) => {
        const aIndex = lunrResults.find(
          (result) => result.ref === a.url
        )!.score;
        const bIndex = lunrResults.find(
          (result) => result.ref === b.url
        )!.score;

        return bIndex - aIndex;
      });
  }, [input, blogIndex]);
};

export default function Search() {
  const router = useRouter();
  const [input, setInput] = React.useState("");
  const searchResults = useSearchResults(input);
  const { showSearch, setShowSearch } = React.useContext(SearchContext);
  const modalRef = React.useRef(null);

  useOutsideClick([modalRef], () => {
    setShowSearch(false);
  });

  React.useEffect(() => {
    setInput("");
  }, [showSearch]);

  if (!showSearch) {
    return null;
  }
  return (
    <Styled.Wrapper>
      <Command
        ref={modalRef}
        label="Global search"
        shouldFilter={false}
        loop={false}
      >
        <Styled.StInputWrapper>
          <input
            autoFocus
            type="text"
            placeholder="Search"
            value={input}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInput(e.target.value);
            }}
          />
        </Styled.StInputWrapper>

        {searchResults.length > 0 && (
          <Styled.StListWrapper>
            <Command.List>
              {searchResults.map(({ title, url, category, _type }) => {
                const path = getPath(url, _type);
                const _title =
                  _type === "widget" ? `${category} - ${title}` : title;

                return (
                  <Link
                    href={path}
                    onClick={() => {
                      setShowSearch(false);
                    }}
                    key={_title}
                  >
                    <Command.Item
                      value={`${_title} - ${searchResults.length}`}
                      onSelect={() => {
                        router.push(path);
                        setShowSearch(false);
                      }}
                    >
                      <div>{_title}</div>
                      <Styled.ItemType $type={_type}>{_type}</Styled.ItemType>
                    </Command.Item>
                  </Link>
                );
              })}
            </Command.List>
          </Styled.StListWrapper>
        )}
      </Command>
    </Styled.Wrapper>
  );
}
