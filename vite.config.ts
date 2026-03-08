export default defineConfig(({ mode }) => {
  const isGitHubPages = process.env.GITHUB_PAGES === 'true' || process.env.CI === 'true';
  return {
    base: isGitHubPages ? '/dantay-dentalclinik/' : '/',
    // Add other existing config fields here
  };
});
