import icons from '../../assets/icons/icon.svg';

export default function Icon({ id, fill, stroke, ...props }) {
  return (
    <svg {...props}>
      <use href={`${icons}#${id}`} fill={fill} stroke={stroke} />
    </svg>
  );
}
