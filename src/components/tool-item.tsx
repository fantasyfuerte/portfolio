interface Props {
  tool: {
    name: string;
    icon: string;
  };
}

function ToolItem({ tool }: Props) {
  return (
    <div key={tool.name} className="border-2 border-red-950 h-20">
      <img
        src={tool.icon}
        alt={tool.name}
        width={50}
        height={50}
        className=""
      />
    </div>
  );
}

export default ToolItem;
