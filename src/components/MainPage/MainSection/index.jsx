import * as Styled from './styled';

import { FaComment, FaHeart, FaTags } from 'react-icons/fa';
import { MdApps, MdPlayCircleOutline } from 'react-icons/md';

import { BiMoviePlay } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import React from 'react';
import gallery01 from '../../../assets/images/gallery/gallery01.jpg';
import gallery02 from '../../../assets/images/gallery/gallery02.jpg';
import gallery03 from '../../../assets/images/gallery/gallery03.jpg';
import gallery04 from '../../../assets/images/gallery/gallery04.jpg';
import gallery05 from '../../../assets/images/gallery/gallery05.jpg';
import gallery06 from '../../../assets/images/gallery/gallery06.jpg';
import gallery07 from '../../../assets/images/gallery/gallery07.jpg';
import gallery08 from '../../../assets/images/gallery/gallery08.jpg';
import gallery09 from '../../../assets/images/gallery/gallery09.jpg';
import gallery10 from '../../../assets/images/gallery/gallery10.jpg';
import gallery11 from '../../../assets/images/gallery/gallery11.jpg';
import gallery12 from '../../../assets/images/gallery/gallery12.jpg';

export default function Section() {
  return (
    <Styled.Container>
      <Styled.Navigation>
        <div>
          <IconContext.Provider value={{ size: '16px' }}>
            <div>
              <MdApps />
            </div>
          </IconContext.Provider>
          <span>게시물</span>
        </div>
        <div>
          <IconContext.Provider value={{ size: '16px' }}>
            <div>
              <BiMoviePlay />
            </div>
          </IconContext.Provider>
          <span>릴스</span>
        </div>
        <div>
          <IconContext.Provider value={{ size: '16px' }}>
            <div>
              <MdPlayCircleOutline />
            </div>
          </IconContext.Provider>
          <span>동영상</span>
        </div>
        <div>
          <IconContext.Provider value={{ size: '16px' }}>
            <div>
              <FaTags />
            </div>
          </IconContext.Provider>
          <span>태그됨</span>
        </div>
      </Styled.Navigation>
      <Styled.Posts>
        <div>
          {new Array(3).fill('').map((element, index) => {
            const gallery = index % 3 === 0 ? gallery01 : index % 3 === 1 ? gallery02 : gallery03;

            return (
              <div key={index}>
                <img src={gallery} alt='mainProfile' />
                <div>
                  <div>
                    <div>
                      <IconContext.Provider value={{ size: '16px' }}>
                        <div>
                          <FaHeart />
                        </div>
                      </IconContext.Provider>
                      <span>&nbsp;995천</span>
                    </div>

                    <div>
                      <div>
                        <IconContext.Provider value={{ size: '16px' }}>
                          <div>
                            <FaComment />
                          </div>
                        </IconContext.Provider>
                      </div>
                      <span>&nbsp;6,541</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          {new Array(3).fill('').map((element, index) => {
            const gallery = index % 3 === 0 ? gallery04 : index % 3 === 1 ? gallery05 : gallery06;

            return (
              <div key={index + 3}>
                <img src={gallery} alt='mainProfile' />
                <div>
                  <div>
                    <div>
                      <IconContext.Provider value={{ size: '16px' }}>
                        <div>
                          <FaHeart />
                        </div>
                      </IconContext.Provider>
                      <span>&nbsp;995천</span>
                    </div>

                    <div>
                      <div>
                        <IconContext.Provider value={{ size: '16px' }}>
                          <div>
                            <FaComment />
                          </div>
                        </IconContext.Provider>
                      </div>
                      <span>&nbsp;6,541</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          {new Array(3).fill('').map((element, index) => {
            const gallery = index % 3 === 0 ? gallery07 : index % 3 === 1 ? gallery08 : gallery09;

            return (
              <div key={index + 6}>
                <img src={gallery} alt='mainProfile' />
                <div>
                  <div>
                    <div>
                      <IconContext.Provider value={{ size: '16px' }}>
                        <div>
                          <FaHeart />
                        </div>
                      </IconContext.Provider>
                      <span>&nbsp;995천</span>
                    </div>

                    <div>
                      <div>
                        <IconContext.Provider value={{ size: '16px' }}>
                          <div>
                            <FaComment />
                          </div>
                        </IconContext.Provider>
                      </div>
                      <span>&nbsp;6,541</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          {new Array(3).fill('').map((element, index) => {
            const gallery = index % 3 === 0 ? gallery10 : index % 3 === 1 ? gallery11 : gallery12;

            return (
              <div key={index + 9}>
                <img src={gallery} alt='mainProfile' />
                <div>
                  <div>
                    <div>
                      <IconContext.Provider value={{ size: '16px' }}>
                        <div>
                          <FaHeart />
                        </div>
                      </IconContext.Provider>
                      <span>&nbsp;995천</span>
                    </div>

                    <div>
                      <div>
                        <IconContext.Provider value={{ size: '16px' }}>
                          <div>
                            <FaComment />
                          </div>
                        </IconContext.Provider>
                      </div>
                      <span>&nbsp;6,541</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Styled.Posts>
    </Styled.Container>
  );
}
