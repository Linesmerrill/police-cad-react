import React from "react";
export const Footer10DataSource = {
  wrapper: { className: "home-page-wrapper footer1-wrapper" },
  OverPack: { className: "footer1", playScale: 0.2 },
  block: {
    className: "home-page",
    gutter: 0,
    children: [
      {
        name: "block0",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          className: "logo",
          children:
            "https://www.linespolice-cad.com/static/images/lpc_logo_new_2023_landscape_transparent.png",
        },
        childWrapper: {
          className: "slogan",
          children: [
            {
              name: "content0",
              children: (
                <span>
                  <span>
                    <span>
                      <p>
                        Worlds Leading Free-to-use role-play facilitator
                        <br />
                      </p>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: "block1",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          children: (
            <span>
              <p>Information</p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              name: "link0",
              href: "https://github.com/Linesmerrill/police-cad/releases",
              children: (
                <span>
                  <p>
                    Release Log
                    <br />
                  </p>
                </span>
              ),
              target: "",
            },
            {
              name: "link1",
              href: "https://linesmerrill.github.io/MerrillLines/",
              children: (
                <span>
                  <p>Developers</p>
                </span>
              ),
            },
            {
              href: "https://www.patreon.com/linespolicecad",
              name: "link2",
              children: (
                <span>
                  <p>Patreon</p>
                </span>
              ),
              target: "_blank",
            },
            {
              href: "https://github.com/linesmerrill/police-cad",
              name: "link3",
              children: (
                <span>
                  <p>GitHub</p>
                </span>
              ),
              target: "_blank",
            },
          ],
        },
      },
      {
        name: "block2",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          children: (
            <span>
              <p>About</p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            { href: "/faq", name: "link0", children: "FAQ" },
            {
              href: "/contact-us",
              name: "link1",
              children: (
                <span>
                  <p>
                    Contact Us
                    <br />
                  </p>
                </span>
              ),
            },
            {
              name: "link2",
              href: "/terms-and-conditions",
              children: (
                <span>
                  <p>Terms and Conditions</p>
                </span>
              ),
            },
            {
              name: "link3",
              href: "/privacy-policy",
              children: (
                <span>
                  <p>Privacy Policy</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: "block3",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          children: (
            <span>
              <p>Follow</p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              href: "https://discord.gg/3ECFhqe",
              name: "link0",
              children: (
                <span>
                  <p>Discord</p>
                </span>
              ),
              target: "_blank",
            },
            {
              href: "https://twitter.com/LinesPoliceCAD",
              name: "link1",
              children: (
                <span>
                  <p>Twitter</p>
                </span>
              ),
              target: "_blank",
            },
            {
              href: "https://www.facebook.com/linespoliceserver/",
              name: "link2",
              children: (
                <span>
                  <p>Facebook</p>
                </span>
              ),
              target: "_blank",
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: "copyright-wrapper" },
  copyrightPage: { className: "home-page" },
  copyright: {
    className: "copyright",
    children: (
      <span>
        <span>
          ©2023 by{" "}
          <a
            href="https://sites.google.com/view/tlps-dev/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            TLPS
          </a>{" "}
          All Rights Reserved
        </span>
      </span>
    ),
  },
};
