import React, { useState } from "react";
import Img1 from "./image/home-1-1-1.jpg";
import Chatbot from "react-chatbot-kit";
import "../src/Chat/styles.css";

import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";
import { Modal } from "antd";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <>
      <header>
        <nav className="shadow">
          <div className="container px-6 py-4 mx-auto">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="flex items-center justify-between">
                <div className="text-xl font-semibold">
                  <a
                    className="text-2xl font-bold lg:text-3xl text-white"
                    href="/"
                  >
                    Brand N
                  </a>
                </div>
                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                  <button
                    type="button"
                    className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                    aria-label="toggle menu"
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="hidden text-white -mx-4 lg:flex lg:items-center">
                <a
                  href="/"
                  className="text-white block mx-4 mt-2 text-sm capitalize lg:mt-0 hover:text-blue-600 dark:hover:text-indigo-400"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="text-white block mx-4 mt-2 text-sm capitalize lg:mt-0 hover:text-blue-600 dark:hover:text-indigo-400"
                >
                  About Us
                </a>
                <a
                  href="/"
                  className="text-white block mx-4 mt-2 text-sm capitalize lg:mt-0 hover:text-blue-600 dark:hover:text-indigo-400"
                >
                  Services
                </a>
                <a
                  href="/"
                  className="text-white block mx-4 mt-2 text-sm capitalize lg:mt-0 hover:text-blue-600 dark:hover:text-indigo-400"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div
          className="w-full bg-center bg-cover -mt-20"
          style={{
            backgroundImage: `url(${Img1})`,
            height: "40rem",
            borderRadius: "0 0 0 9rem",
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-opacity-50">
            <div className="text-center">
              <h1 className="text-white text-4xl md:text-6xl lg:text-8xl xl:text-8xl">
                Web. Mobile. Consulting
              </h1>
              <h1 className="text-2xl text-white uppercase lg:text-3xl mt-5 font-normal">
                Whatever You Think,
                <span className="text-blue-400 underline font-semibold ">
                  We Will Create
                </span>
              </h1>
              <button className=" px-7 py-4 mt-4 text-sm font-medium text-white transition-colors duration-200 transform hover:bg-blue-600 border-2 border-white rounded-full sm:w-auto xs:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Hire Us
            </button>
            </div>
          </div>
        </div>
      </header>

      <div>
        <div id="body">
          {/*button*/}
          <div
            id="chat-circle"
            onClick={() => setModalVisible(true)}
            className="btn btn-raised"
          >
            <div id="chat-overlay" />
            {/*<i class="material-icons">android</i>*/}
            <img
              className="chat-circle_robot"
              src="https://embed.tawk.to/_s/v4/assets/images/default-profile.svg"
              alt="char-circle-code"
            />
          </div>
          {/*chat-bot*/}
          <div className="chat-box">
            <div className="chat-box-body">
              {/*welcome message*/}
              <div className="chat-box-welcome__header">
                <div id="chat-box-welcome__ava">
                  {/*<i class="material-icons">android</i>*/}
                  <img
                    className="chat-box-welcome_robot"
                    src="https://cdn.iconscout.com/icon/free/png-256/robot-86-404724.png"
                    alt="chat-box-welcome_robot"
                  />
                </div>

                {/*<div id="chat">

              </div>*/}
              </div>
              {/*chat-bot after welcome was toggled*/}
            </div>
          </div>
        </div>
      </div>

      <Modal
        title={false}
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        footer={false}
      >
        <Chatbot
         onClick={() => setModalVisible(true)}
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </Modal>
    </>
  );
};

export default Home;
