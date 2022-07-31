import React from "react";
//next auth
import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

function signin({ providers }) {
  return (
    <div>
      <Header />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}
export const getServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
};
export default signin;
