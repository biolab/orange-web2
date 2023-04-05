import DownloadHeader from "@components/Download/Header";
import Link from "next/link";
import config from "config.json";

export default function Download() {
  return (
    <div>
      <DownloadHeader />

      <div>
        <div>
          <h2>Windows</h2>
          <h3>Standalone installer (default)</h3>

          <Link href={`https://download.biolab.si/download/files/Orange3-${config.version}-Miniconda-x86_64.exe`}>
            Orange3-${config.version}-Miniconda-x86_64.exe (64 bit)
          </Link>

          <p>Can be used without administrative priviledges.</p>

          <h3>Portable Orange</h3>

          <Link href={`https://download.biolab.si/download/files/Orange3-${config.version}.zip`}>
            Orange3-{config.version}.zip
          </Link>

          <p>No installation needed. Just extract the archive and open the shortcut in the extracted folder.</p>
        </div>

        <div>
          <h2>macOS</h2>

          <Link href={`https://download.biolab.si/download/files/Orange3-${config.version}-Python3.9.12.dmg`}>
            Orange3-{config.version}-Python3.8.8.dmg
          </Link>

          <p>A universal bundle with everything packed in and ready to use.</p>
        </div>

        <div>
          <h2>Other platforms</h2>
          <h3>Anaconda</h3>
          <p>
            If you are using python provided by Anaconda distribution, you are almost ready to go. Add conda-forge to
            the list of channels you can install packages from (and make it default)
          </p>
          <code>conda config --add channels conda-forge conda config --set channel_priority strict</code>
          <p>and run</p>
          <code>conda install orange3</code>

          <p>A universal bundle with everything packed in and ready to use.</p>

          <h3>Pip</h3>
          <p>
            Orange can also be installed from the Python Package Index. You may need additional system packages provided
            by your distribution.
          </p>
          <code>pip install orange3</code>

          <h3>Installing from source</h3>
          <p>
            Clone our repository from GitHub or download the source code tarball. Then follow the instructions in
            README.md
          </p>

          <p>To run Orange Canvas run</p>
          <code>python -m Orange.canvas</code>
        </div>

        <div>
          <h2>Download archive</h2>
          Download older versions from{" "}
          <a href="https://download.biolab.si/download/files/" target="_blank" rel="noreferrer">
            our archive
          </a>
          .
        </div>
      </div>

      <aside>
        <h2>Installing add-ons</h2>
        <p>
          Additional features can be added to Orange by installing add-ons. You can find add-on manager in Options menu.
        </p>
      </aside>
    </div>
  );
}
