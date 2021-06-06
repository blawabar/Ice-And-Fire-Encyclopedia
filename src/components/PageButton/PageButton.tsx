import "./PageButton.scss";

type Props = {
  isDisabled: boolean;
  label: string;
  [key: string]: any;
};

const PageButton: React.FC<Props> = ({ isDisabled, label, ...rest }) => (
  <input
    type="button"
    className="page-btn"
    disabled={isDisabled}
    value={label}
    {...rest}
  />
);

export default PageButton;
