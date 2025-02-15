interface Props {
  tool: {
    name: string;
    icon: string;
  };
}

function ToolItem({ tool }: Props) {
  return (
    <div
      key={tool.name}
      className="h-20 flex flex-col items-center justify-center p-3"
    >
      <img
        src={tool.icon}
        alt={tool.name}
        width={50}
        height={50}
        className="w-full h-full object-contain drop-shadow-custom"
      />
    </div>
  );
}

export default ToolItem;
