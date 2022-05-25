import BreakPoints from "@/components/BreakPoints";
import Header1 from "@/components/headers/Header1";
import Header2 from "@/components/headers/Header2";
import Header3 from "@/components/headers/Header3";
import Header4 from "@/components/headers/Header4";
import Header5 from "@/components/headers/Header5";
import HeaderTest from "@/components/headers/HeaderTest";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <>
      <BreakPoints />
      <Layout>
        <HeaderTest />
        {/*
        <Header2 />
        <Header3 />
        <Header5 />
        <Header4 /> */}
      </Layout>
    </>
  );
};

export default Index;
