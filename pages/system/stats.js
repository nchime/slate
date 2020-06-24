import * as React from 'react';
import * as System from '~/components/system';

import SystemPage from '~/components/system/SystemPage';
import ViewSourceLink from '~/components/system/ViewSourceLink';

export default class SystemPageStats extends React.Component {
  render() {
    return (
      <SystemPage title="FCDS: Stats" description="Lorem Ipsum." url="https://fps.onrender.com/system/stats">
        <System.H1>
          Stats <ViewSourceLink file="stats.js" />
        </System.H1>
        <br />
        <br />
        <System.P>The System Stats component is used to show a system stat with an upload or a download icon.</System.P>
        <br />
        <br />
        <System.H2>Usage</System.H2>
        <hr />
        <br />
        <System.P>Delcare the StatUpload and/or the StatDownload components.</System.P>
        <br />
        <System.CodeBlock>
{`<System.StatUpload>40 mb</System.StatUpload>

<System.StatDownload>40 mb</System.StatDownload>`}
        </System.CodeBlock>
        <br />
        <br />
        <System.H2>Output</System.H2>
        <hr />
        <br />
        <System.StatUpload>40 mb</System.StatUpload> <System.StatDownload>40 mb</System.StatDownload>
      </SystemPage>
    );
  }
}