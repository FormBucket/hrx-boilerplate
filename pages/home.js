import React from "react";
import { Eval, Rule } from "hrx";

let home = props => (
  <div>
    <h1>Welcome to HRX.</h1>
    <p>
      In hrx you can evaluate rules like:
      <pre>SUM(A1:A3)</pre>
    </p>
    <p>
      You can use the Eval component to evaluate:
      <pre>
        import {Eval} from "hrx" let cmp = (props) => <br />
        {`<Eval exp="SUM(A, B, C)" values={{ A: 2, B: 2, C: 4 }} />`}
      </pre>
    </p>
    <p>
      When you run Eval it should print 8 right ->{" "}
      <Eval exp="SUM(A, B, C)" values={{ A: 2, B: 2, C: 4 }} />
    </p>
    <p>
      If you wanted to inspect the rule you can print it out:
      <pre>
        import {Rule} from "hrx" let cmp = (props) => <br />
        {`<Rule exp="sum(a, b, c)" />`}
      </pre>
    </p>
    <p>
      You should see the rules below
      <Rule exp="SUM(a, b, c)" />
    </p>
  </div>
);
export default home;
