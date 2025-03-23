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
      className="h-14 flex flex-col items-center justify-center p-2"
    >
      <img
        src={tool.icon}
        alt={tool.name}
        width={40}
        height={40}
        className="w-full h-full object-contain drop-shadow-custom"
      />
    </div>
  );
}

export default ToolItem;
