import supabase from "utils/supabase.server";

export default function Login() {
  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });

    if (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onCLick={handleLogout}>Logout</button>
      <button onCLick={handleLogin}>Login</button>
    </>
  );
}
