export const MainLayout = ({ children, ...props }) => {
  return (
    <>
      <main {...props}>{children}</main>
    </>
  );
};
