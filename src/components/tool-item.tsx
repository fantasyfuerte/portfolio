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
      className="h-20 flex flex-col items-center justify-center p-2" 
    >
      <img
        src={tool.icon}
        alt={tool.name}
        width={50}
        height={50}
        className="w-full h-full object-contain"
      />
    </div>
  );
}

export default ToolItem;
