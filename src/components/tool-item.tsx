interface Props {
  tool: {
    name: string;
    icon: string;
  };
}

function ToolItem({ tool }: Props) {
  return (
    <div className="w-full h-full flex justify-center">
      <div
        key={tool.name}
        className="h-10 w-10 flex items-center justify-center my-3"
      >
        <img
          src={tool.icon}
          alt={tool.name}
          width={40}
          height={40}
          className="w-full h-full object-contain drop-shadow-custom"
        />
      </div>
    </div>
  );
}

export default ToolItem;
