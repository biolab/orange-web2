import DownloadHeader from "@components/Download/Header";
import Link from "next/link";
import config from "config.json";
import Adapt from "@components/UiKit/Adapt";
import styled from "styled-components";
import AddonsImage from "@public/download/download-addons.webp";
import Image from "@components/Image/Image";
import device from "@styles/utils/breakpoints";

const StDownloadWrapper = styled.div`
  display: flex;
  gap: 112px;
  margin-bottom: 90px;
  font-size: 22px;

  @media ${device.M} {
    flex-direction: column;
    align-items: center;
    margin-bottom: 240px;
  }

  h2 {
    font-size: 34px;
    font-weight: 700;
    margin-bottom: 20px;
    margin-top: 54px;
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 8px;
    margin-top: 42px;
  }

  a {
    color: ${({ theme }) => theme.orange};

    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.orange};
    }
  }

  p {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;

const StLeftColumn = styled.div`
  flex: 2 1 auto;
`;

const StAside = styled.aside`
  flex-shrink: 0;
  margin-top: 120px;
  position: relative;
  width: 402px;

  img {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-20px, -135px) scale(1.2);

    &:nth-child(2) {
      transform: rotate(102deg) translate(-1px, -45px) scale(1.2);
    }
  }
`;

const StAsideContent = styled.div`
  z-index: 1;
  position: relative;
  background: #fff;
  padding: 45px;
  flex-direction: column;
  gap: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 6px;

  h2 {
    margin-top: 0;
    margin-bottom: 20px;
  }
`;

const StAdapt = styled(Adapt)`
  overflow: hidden;
`;

export default function Download() {
  return (
    <div>
      <DownloadHeader />

      <StAdapt>
        <StDownloadWrapper>
          <StLeftColumn>
            <div>
              <h2>Windows</h2>
              <h3>Standalone installer (default)</h3>

              <Link
                href={`https://download.biolab.si/download/files/Orange3-${config.version}-Miniconda-x86_64.exe`}
              >
                Orange3-${config.version}-Miniconda-x86_64.exe (64 bit)
              </Link>

              <p>Can be used without administrative priviledges.</p>

              <h3>Portable Orange</h3>

              <Link
                href={`https://download.biolab.si/download/files/Orange3-${config.version}.zip`}
              >
                Orange3-{config.version}.zip
              </Link>

              <p>
                No installation needed. Just extract the archive and open the
                shortcut in the extracted folder.
              </p>
            </div>

            <div>
              <h2>macOS</h2>

              <Link
                href={`https://download.biolab.si/download/files/Orange3-${config.version}-Python3.9.12.dmg`}
              >
                Orange3-{config.version}-Python3.8.8.dmg
              </Link>

              <p>
                A universal bundle with everything packed in and ready to use.
              </p>
            </div>

            <div>
              <h2>Other platforms</h2>
              <h3>Anaconda</h3>
              <p>
                If you are using python provided by Anaconda distribution, you
                are almost ready to go. Add conda-forge to the list of channels
                you can install packages from (and make it default)
              </p>
              <pre>
                <code>
                  conda config --add channels conda-forge conda config --set
                  channel_priority strict
                </code>
              </pre>
              <p>and run</p>
              <pre>
                <code>conda install orange3</code>
              </pre>

              <p>
                A universal bundle with everything packed in and ready to use.
              </p>

              <h3>Pip</h3>
              <p>
                Orange can also be installed from the Python Package Index. You
                may need additional system packages provided by your
                distribution.
              </p>
              <pre>
                <code>pip install orange3</code>
              </pre>

              <h3>Installing from source</h3>

              <p>
                Clone our repository from{" "}
                <a href="https://github.com/biolab/orange3">GitHub</a> or
                download the{" "}
                <a href="https://github.com/biolab/orange3/archive/stable.tar.gz">
                  source code tarball
                </a>
                . Then follow the instructions in{" "}
                <a href="https://github.com/biolab/orange3/blob/stable/README.md">
                  README.md
                </a>
              </p>

              <p>To run Orange Canvas run</p>
              <pre>
                <code>python -m Orange.canvas</code>
              </pre>
            </div>

            <div>
              <h2>Download archive</h2>
              Download older versions from{" "}
              <a
                href="https://download.biolab.si/download/files/"
                target="_blank"
                rel="noreferrer"
              >
                our archive
              </a>
              .
            </div>
          </StLeftColumn>

          <StAside>
            <Image
              src={AddonsImage.src}
              alt="Addons"
              width={AddonsImage.width}
              height={AddonsImage.height}
            />
            <Image
              src={AddonsImage.src}
              alt="Addons"
              width={AddonsImage.width}
              height={AddonsImage.height}
            />
            <StAsideContent>
              <h2>Installing add-ons</h2>
              <p>
                Additional features can be added to Orange by installing
                add-ons. You can find add-on manager in Options menu.
              </p>
            </StAsideContent>
          </StAside>
        </StDownloadWrapper>
      </StAdapt>
    </div>
  );
}
