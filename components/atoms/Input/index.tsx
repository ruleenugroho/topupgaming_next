interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  id: string;
}
export default function Input(props: InputProps) {
  const { label, type, placeholder, id, ...nativeProps } = props;
  return (
    <label
      htmlFor={id}
      className="form-label text-lg fw-medium color-palette-1 mb-10"
    >
      {label}
      <input
        type={type}
        className="form-control rounded-pill text-lg"
        id={id}
        name={id}
        aria-describedby={id}
        placeholder={placeholder}
        {...nativeProps}
      />
    </label>
  );
}
