import React from 'react';
import './styles/index.scss';
import {Routing} from "@/components/pages";
import {withRouter} from "@/components/app/providers/with-router.jsx";

const App = () => {
  return (
    <Routing />
  );
};

export default withRouter(App);