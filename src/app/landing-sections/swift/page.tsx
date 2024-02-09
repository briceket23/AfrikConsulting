import React from "react";
import SwiftGPI from "./swiftgpi";
import SwiftGo from "./swiftgo";
import CaseManagement from "./casemanagement";
import SwiftPayementPrevalidation from "./swiftpayementPrevalidation";
import Financialcrime from "./financialcrime";

const Swift = () => {
  return (
    <section>
      <div className='w-full md:mr-8'>
        <h1 className='md:text-5xl font-bold'>
          SWIFT <span className='md:text-primary'>Components</span>
        </h1>
      </div>
      <SwiftGPI isImageFirst={false} />
      <SwiftGo isImageFirst={true} />
      <CaseManagement isImageFirst={false} />
      <SwiftPayementPrevalidation isImageFirst={true} /> 
      <Financialcrime isImageFirst={false} />
    </section>
  );
};

export default Swift;
<SwiftPayementPrevalidation isImageFirst={true} />