import { useRouter } from 'next/router'
import React from "react";
import blogPosts from "../blogPosts.json"

export default function Custom404() {
  const [fallbackRouteChecked, setFallbackRouteChecked] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => { 
    if (!router.asPath.startsWith("/blog/")) {
      setFallbackRouteChecked(true);
      return;
    }

    const post = blogPosts.find((post) => post.oldSlug === router.asPath.split("/").at(-1));
    
    if (!post?.url) {
      setFallbackRouteChecked(true);
      return;
    }

    router.push(`/blog/${post.url}`);
  }, [router.asPath]);

  if (!fallbackRouteChecked) { 
    return <div>Checking fallback route...</div>;
  }
  return <h1>404 - Page Not Found</h1>;
}
