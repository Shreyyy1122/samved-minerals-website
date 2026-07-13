import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-MVJ9XG2QH6");
};

export const trackPageView = (path) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};