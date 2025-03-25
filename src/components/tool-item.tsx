interface Props {
  tool: {
    name: string;
    icon: string;
  };
}

function ToolItem({ tool }: Props) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center mb-1">
      <div
        key={tool.name}
        className="h-10 w-10 flex items-center justify-center my-2"
      >
        <img
          src={tool.icon}
          alt={tool.name}
          width={40}
          height={40}
          className="w-full h-full object-contain drop-shadow-custom"
        />
      </div>
      <span className="font-bold text-[12px] text-center opacity-90">
        {tool.name}
      </span>
    </div>
  );
}

export default ToolItem;
