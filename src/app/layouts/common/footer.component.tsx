import { FaGoogle } from 'react-icons/fa';
import { FaFacebook, FaXTwitter } from 'react-icons/fa6';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-black text-white p-8 flex justify-between">
      <div>
        <div className="flex items-center space-x-4">
          <a href="/" className="text-white">
            <FaFacebook />
          </a>
          <a href="/" className="text-white">
            <FaXTwitter />
          </a>
          <a href="/" className="text-white">
            <FaGoogle />
          </a>
        </div>
        <div className="mt-4">
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href="/" className="text-white">
                Instagram
              </a>
            </li>
            <li>
              <a href="/" className="text-white">
                Google
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="mt-5 text-medium items-center">Copyright ©2024; Designed by 3DHA</h2>
      </div>
    </div>
  );
};

export default Footer;
