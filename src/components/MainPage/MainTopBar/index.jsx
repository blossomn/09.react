import * as Styled from './styled';

import { FaRegCompass, FaRegHeart, FaRegPaperPlane } from 'react-icons/fa';

import { CgProfile } from 'react-icons/cg';
import { GrHomeRounded } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import { IoSearch } from 'react-icons/io5';
import mainLogo from '../../../assets/icons/mainLogo.png';

export default function TopBar() {
  return (
    <Styled.Container>
      <div>
        <Styled.MainLogoImg src={mainLogo} alt='main-logo' />
      </div>

      <Styled.Search>
        <IconContext.Provider
          value={{
            color: '#8e8e8e',
          }}>
          <div>
            <IoSearch />
          </div>
        </IconContext.Provider>
        <input type='text' placeholder='검색' />
      </Styled.Search>

      <Styled.Icons>
        <div>
          <IconContext.Provider value={{ size: '1.2em' }}>
            <div>
              <GrHomeRounded />
            </div>
          </IconContext.Provider>
        </div>
        <div>
          <IconContext.Provider value={{ size: '1.2em' }}>
            <div>
              <FaRegPaperPlane />
            </div>
          </IconContext.Provider>
        </div>
        <div>
          <IconContext.Provider value={{ size: '1.2em' }}>
            <div>
              <FaRegCompass />
            </div>
          </IconContext.Provider>
        </div>
        <div>
          <IconContext.Provider value={{ size: '1.2em' }}>
            <div>
              <FaRegHeart />
            </div>
          </IconContext.Provider>
        </div>
        <div>
          <IconContext.Provider value={{ size: '1.2em' }}>
            <div>
              <CgProfile />
            </div>
          </IconContext.Provider>
        </div>
      </Styled.Icons>
    </Styled.Container>
  );
}
