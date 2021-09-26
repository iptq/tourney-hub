<script context="module">
  import { goto } from "$app/navigation";

  export async function load({ page, session, fetch }) {
    console.log("page", page);
    if (!session.isLoggedIn) {
      return {
        status: 302,
        redirect: "/",
      };
    }
    return {};
  }
</script>

<slot />
