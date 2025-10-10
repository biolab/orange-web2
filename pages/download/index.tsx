import DownloadHeader from "@components/Download/Header";
import Link from "next/link";
import config from "config.json";
import Adapt from "@components/UiKit/Adapt";
import styled from "styled-components";
import AddonsImage from "@public/download/download-addons.png";
import Image from "@components/Image/Image";
import device from "@styles/utils/breakpoints";
import { AiOutlineDownload } from "react-icons/ai";

export const downloadLinks = {
  macos: `https://download.biolab.si/download/files/Orange3-${config.version}-Python3.10.11-x86_64.dmg`,
  macosArm: `https://download.biolab.si/download/files/Orange3-${config.version}-Python3.11.8-arm64.dmg`,
  win: `https://download.biolab.si/download/files/Orange3-${config.version}-x86_64.exe`,
  portableOrange: `https://download.biolab.si/download/files/Orange3-${config.version}.zip`,
};

const StDownloadWrapper = styled.div`
  display: flex;
  gap: 112px;
  margin-bottom: 90px;
  font-size: 18px;
  color: ${({ theme }) => theme.blackLight1};

  @media ${device.M} {
    flex-direction: column;
    align-items: center;
    margin-bottom: 240px;
  }

  h2 {
    font-size: 34px;
    font-weight: 700;
    margin-bottom: 32px;
    margin-top: 64px;
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 6px;
    margin-top: 32px;
  }

  a {
    color: ${({ theme }) => theme.orange};

    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.orange};
    }
  }

  p {
    margin-bottom: 8px;
  }
`;

const StDisclaimer = styled.p`
  margin-top: 28px;

  b {
    font-weight: 600;
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

const StLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
`;

const DownloadLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <StLink href={href}>
      <AiOutlineDownload />
      {text}
    </StLink>
  );
};

export default function Download() {
  return (
    <div>
      <DownloadHeader />

      <StAdapt>
        <StDownloadWrapper>
          <StLeftColumn>
            <div>
              <h2 id="win">Windows</h2>
              <h3>Standalone installer (default)</h3>

              <DownloadLink
                href={downloadLinks.win}
                text={downloadLinks.win.split("/").pop() || `Orange3-${config.version}-Miniconda-x86_64.exe`}
              />

              <p>Can be used without administrative privileges.</p>

              <h3>Portable Orange</h3>

              <DownloadLink
                href={downloadLinks.portableOrange}
                text={downloadLinks.portableOrange.split("/").pop() || `Orange3-${config.version}.zip`}
              />

              <p>
                No installation needed. Just extract the archive and open the
                shortcut in the extracted folder.
              </p>
            </div>

            <div>
              <h2 id="mac">macOS</h2>

              <h3>Orange for Apple silicon</h3>
              <DownloadLink
                href={downloadLinks.macosArm}
                text={downloadLinks.macosArm.split("/").pop() || `Orange3-${config.version}-arm64.dmg`}
              />

              <h3>Orange for Intel</h3>

              <DownloadLink
                href={downloadLinks.macos}
                text={downloadLinks.macos.split("/").pop() || `Orange3-${config.version}-x86_64.dmg`}
              />

              <StDisclaimer>
                <b>Not sure which installer to select?</b> Click the Apple logo
                in the top-left corner of your screen, select About This Mac,
                and check the Chip or Processor field. If you see Apple, select
                the Orange for Apple Silicon installer. If you see Intel, select
                the Orange for Intel.
              </StDisclaimer>
            </div>

            <div>
              <h2 id="other">Other platforms</h2>
              <h3>Anaconda</h3>

              <p>
                Create and activate a conda environment for Orange (optional, but recommended)
              </p>
              <pre>
                <code>
                  conda create python=3.10 --yes --name orange3<br />
                  conda activate orange3
                </code>
              </pre>

              <p>
                Add conda-forge to the list of channels
                you can install packages from (and make it default)
              </p>
              <pre>
                <code>
                  conda config --add channels conda-forge<br />
                  conda config --set channel_priority strict
                </code>
              </pre>
              <p>and run</p>
              <pre>
                <code>conda install orange3</code>
              </pre>

              <h3>Pip</h3>
              <p>
                Orange can also be installed from PyPI. You
                may need additional system packages provided by your
                distribution.
              </p>

              <p>
                If your system does not already provide PyQt, install
                it from PyPI
              </p>

              <pre>
                <code>pip install PyQt5 PyQtWebEngine</code>
              </pre>

              <p>
                Finally, install Orange
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

              <h3>Running Orange</h3>

              <p>To run Orange Canvas run (activate the corresponding environment first if needed)</p>
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
