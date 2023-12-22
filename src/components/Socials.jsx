import { githublack, youtube, twitter, linkedin } from "../assets";

export const Socials = () => {
  return (
    <div>
      <ul className="flex flex-row space-x-1 bg-gray-700 w-48 justify-around mx-auto px-5 py-2 rounded-xl">
        <li>
          <a href="https://twitter.com/TjayPod" target="_blank" rel="noopener noreferrer">
            <img className="cursor-pointer h-5 w-5" src={twitter} alt="Twitter"/>
          </a>
        </li>
        <li>
          <a href="lnkedin.com/in/john-murianki-thiongo" target="_blank" rel="noopener noreferrer">
            <img className="cursor-pointer h-5 w-5" src={linkedin} alt="LinkedIn"/>
          </a>
        </li>
        <li>
          <a href="https://github.com/tjay1760" target="_blank" rel="noopener noreferrer">
            <img className="cursor-pointer h-5 w-5" src={githublack} alt="GitHub"/>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCcEeMgWcGmDL6w5Ow22TALg" target="_blank" rel="noopener noreferrer">
            <img className="cursor-pointer h-5 w-5" src={youtube} alt="YouTube"/>
          </a>
        </li>
      </ul>
    </div>
  );
};
