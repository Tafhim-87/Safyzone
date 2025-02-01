const ArrowIcn = ({
  color = "black",
  hoverColor = "blue",
  className = "",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={12}
      fill="none"
      className={`transition-colors duration-200 ${className} group-hover:text-[${hoverColor}]`}
      {...props}
    >
      <path
        fill="currentColor"
        d="M10.168.518v4.333H.504L.472 7.03h9.696v4.322l5.416-5.416L10.168.518Z"
      />
    </svg>
  );
};

export default ArrowIcn;
