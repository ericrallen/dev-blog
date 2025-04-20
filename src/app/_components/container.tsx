type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-start justify-start gap-20 container mx-auto px-5">
      {children}
    </div>
  );
};

export default Container;
