import React from "react";
import { createElement } from "react";

class Sport extends React.Component {
  //this depends on the Soccer class and Graphs
  constructor(Graphs_cls) {
    super(Graphs_cls);
    this.Graphs = new Graphs();
    this.loaded = 0;
    this.data_one_loaded = 0;
    this.load_all();
  }
  load_all() {
    this.data_one();
    //this.data_two();
    this.loaded = 0;
  }

  async data_one() {
    let hold = await this.Graphs.teams();
    if (hold != null) {
      this.data_one_loaded = 1;
      return hold;
    } else {
      return null;
    }
  }

  sort_data() {
    return 1;
  }
}

class fetch_cmd {
  constructor() {
    this.loaded = 0;
    this.url = "htp";
  }

  fetch_data() {
    return 0;
  }

  fetch_teams() {
    return 1;
  }
}

class Soccer extends fetch_cmd {
  constructor() {
    super();
    this.url = "Soccer fetch url";
    this.loaded = 0;
    this.fetch_data_ = null;
    this.fetch_teams_ = null;
  }
  fetch_data() {
    if (this.fetch_data_ === null) {
    }

    return 5;
  }
  fetch_teams() {
    return 6;
  }
}

class Graphs extends React.Component {
  constructor() {
    super();
    this.fetch_cls = new Soccer();
    this.fetch_cls.fetch_data();
    this.graph_one = NaN;
    this.graph_one_loaded = 0;
    //more
  }

  teams() {
    if (this.graph_one_loaded != 1) {
      this.graph_one = this.fetch_cls.fetch_teams();
      this.graph_one_loaded = 1;
    }
    return (
      <>
        <div>Teams</div>
      </>
    );
  }
}

export default Sport;
export { Soccer, Graphs };
