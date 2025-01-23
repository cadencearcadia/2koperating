import ReCAPTCHA from "react-google-recaptcha";

interface ReCaptchaProps {
  onChange: (token: string | null) => void;
}

const ReCaptchaComponent = ({ onChange }: ReCaptchaProps) => {
  return (
    <div className="my-4">
      <ReCAPTCHA
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // This is Google's test key. Replace with your actual key in production
        onChange={onChange}
      />
    </div>
  );
};

export default ReCaptchaComponent;