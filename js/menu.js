function menu() {
    document.getElementById("topnav").innerHTML = "<style>
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #343434;
    }
    li {
      float: left;
    }
    .dropbtn,
    li a {
      display: inline-block;
      color: #fff;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }
    .dropdown:hover .dropbtn,
    li a:hover {
      background-color: #86b300;
    }
    li.dropdown {
      display: inline-block;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      z-index: 1;
    }
    .dropdown-content a {
      color: #000;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      text-align: left;
      margin-left: 7px;
    }
    .dropdown-content a:hover {
      background-color: #f1f1f1;
    }
    .dropdown:hover .dropdown-content {
      display: block;
    }
    .bolder {
      font-weight: 900;
      color: blue !important;
      margin-left: 0px !important;
    }
  </style>
  <body>
    <ul>
      <li><a href="#">HOME</a></li>
      <li class="dropdown">
        <a
          href="https://sl-rad.github.io/SL-Rad-Vademecum/radiologia_tradizionale.html"
          class="dropbtn"
          >RADIOLOGIA TRADIZIONALE</a
        >
        <div class="dropdown-content">
          <a
            href="#"
            >Agenda & gestione della sala</a
          ><a
            href="https://sl-rad.github.io/SL-Rad-Vademecum/radiologia_tradizionale.html#refertazione-e-telefono"
            >Proiezioni radiografiche</a
          ><a
            href="https://sl-rad.github.io/SL-Rad-Vademecum/radiologia_tradizionale.html#densitometria-ossea"
            >Refertazione RX</a
          >
        </div>
      </li>
      <li class="dropdown">
        <a
          href="https://sl-rad.github.io/SL-Rad-Vademecum/radiologia_tradizionale.html"
          class="dropbtn"
          >CONTRASTOGRAFICI</a
        >
        <div class="dropdown-content">
          <a
            href="#"
            >Agenda & gestione della sala</a
          ><a
            href="https://sl-rad.github.io/SL-Rad-Vademecum/radiologia_tradizionale.html#refertazione-e-telefono"
            >Esecuzione dell'esame contastografico</a
          ><a
            href="https://sl-rad.github.io/SL-Rad-Vademecum/radiologia_tradizionale.html#densitometria-ossea"
            >Refertazione contrastografici</a
          >
        </div>
      </li>
      <li class="dropdown">
        <a
          href="https://sl-rad.github.io/SL-Rad-Vademecum/ecografia.html"
          class="dropbtn"
          >ECOGRAFIA</a
        >
        <div class="dropdown-content">
          <a href="#">Agenda & gestione della sala</a><a href="#">Esecuzione ecografia</a
          ><a href="#">Refertazione ecografia</a>
        </div>
      </li>
      <li class="dropdown">
        <a
          href="https://sl-rad.github.io/SL-Rad-Vademecum/tomografia_computerizzata.html"
          class="dropbtn"
          >TOMOGRAFIA COMPUTERIZZATA</a
        >
        <div class="dropdown-content">
          <a
            href="https://sl-rad.github.io/SL-Rad-Vademecum/tomografia_computerizzata.html#gestione-agenda"
            >Agenda & gestione della sala</a
          ><a href="#">Manovre medico-infermieristiche</a>
          <a href="https://sl-rad.github.io/SL-Rad-Vademecum/tomografia_computerizzata.html#protocolli"
            >Protocolli di acquisizione TC</a
          ><a
            href="https://sl-rad.github.io/SL-Rad-Vademecum/exam_flowchart/TC/flowchart_tc_generale.html"
            >Refertazione TC</a
          >
        </div>
      </li>
      <li class="dropdown">
        <a
          href="https://sl-rad.github.io/SL-Rad-Vademecum/risonanza_magnetica.html"
          class="dropbtn"
          >RISONANZA MAGNETICA</a
        >
        <div class="dropdown-content">
          <a href="#">Agenda & gestione della sala</a><a href="#">Manovre medico-infermieristiche</a><a href="#">Sequenze di acquisizione RM</a><a href="#">Refertazione RM</a>
        </div>
      </li>
      <li>
        <a href="https://sl-rad.github.io/SL-Rad-Vademecum/pronto_soccorso.html"
          >PRONTO SOCCORSO</a
        >
      </li>
  
      <li></li>
  
      <li class="dropdown">
        <a href="https://sl-rad.github.io/SL-Rad-Vademecum/contatti.html"
          >TELEFONI</a
        >
        <div class="dropdown-content">
          <a
            href="https://sl-rad.github.io/SL-Rad-Vademecum/contatti.html#reparti"
            >Ambulatori e Reparti Ospedalieri</a
          ><a
            href="https://sl-rad.github.io/SL-Rad-Vademecum/contatti.html#radiologia"
            >Radiologia Centrale</a
          ><a
            href="https://sl-rad.github.io/SL-Rad-Vademecum/contatti.html#pronto-soccorso"
            >Pronto Soccorso (DEA)</a
          >
        </div>
      </li>
    </ul>
    ";
}