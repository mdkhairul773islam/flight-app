import React, { useEffect } from 'react';
import logo from './assets/images/logo.svg';
import logolight from './assets/images/logo-light.svg';
import uk from './assets/images/flags/uk.svg';
import sp from './assets/images/flags/sp.svg';
import fr from './assets/images/flags/fr.svg';
import gr from './assets/images/flags/gr.svg';
import beach from './assets/images/element/beach.svg';
import island from './assets/images/element/island.svg';
import pool from './assets/images/element/pool.svg';
import camping from './assets/images/element/camping.svg';
import cabin from './assets/images/element/cabin.svg';
import lake from './assets/images/element/lake.svg';
import park from './assets/images/element/park.svg';
import cave from './assets/images/element/cave.svg';
import surf from './assets/images/element/surf.svg';
import farm from './assets/images/element/farm.svg';
import tower from './assets/images/element/tower.svg';
import desert from './assets/images/element/desert.svg';
import paypal from './assets/images/element/paypal.svg';
import visa from './assets/images/element/visa.svg';
import mastercard from './assets/images/element/mastercard.svg';
import expresscard from './assets/images/element/expresscard.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.min.css';
import 'flatpickr/dist/flatpickr.min.css';
import flatpickr from 'flatpickr';
function App() {
  useEffect(() => {
    // Define isVariableDefined function
    function isVariableDefined(variable) {
      return typeof variable !== 'undefined' && variable !== null;
    }

    // Define custom Element prototype functions
    (function () {
      window.Element.prototype.removeClass = function () {
        let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        let selectors = this;
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
          selectors = document.querySelector(selectors);
        }
        // Check if selectors is defined before using isVariableDefined
        if (typeof selectors !== 'undefined' && isVariableDefined(selectors) && className) {
          selectors.classList.remove(className);
        }
        return this;
      };

      window.Element.prototype.addClass = function () {
        let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        let selectors = this;
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
          selectors = document.querySelector(selectors);
        }
        // Check if selectors is defined before using isVariableDefined
        if (typeof selectors !== 'undefined' && isVariableDefined(selectors) && className) {
          selectors.classList.add(className);
        }
        return this;
      };

      window.Element.prototype.toggleClass = function () {
        let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        let selectors = this;
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
          selectors = document.querySelector(selectors);
        }
        // Check if selectors is defined before using isVariableDefined
        if (typeof selectors !== 'undefined' && isVariableDefined(selectors) && className) {
          selectors.classList.toggle(className);
        }
        return this;
      };
    })();

    var e = {
      init: function () {
        e.choicesSelect();
        e.flatPicker();
      },
      choicesSelect: function () {
        var choice = e.select('.js-choice');

        if (typeof choice !== 'undefined' && isVariableDefined(choice)) {
          var element = document.querySelectorAll('.js-choice');

          element.forEach(function (item) {
            var removeItemBtn = item.getAttribute('data-remove-item-button') == 'true' ? true : false;
            var placeHolder = item.getAttribute('data-placeholder') == 'false' ? false : true;
            var placeHolderVal = item.getAttribute('data-placeholder-val') ? item.getAttribute('data-placeholder-val') : 'Type and hit enter';
            var maxItemCount = item.getAttribute('data-max-item-count') ? item.getAttribute('data-max-item-count') : 3;
            var searchEnabled = item.getAttribute('data-search-enabled') == 'true' ? true : false;

            // eslint-disable-next-line no-undef
            var choices = new Choices(item, {
              removeItemButton: removeItemBtn,
              placeholder: placeHolder,
              placeholderValue: placeHolderVal,
              maxItemCount: maxItemCount,
              searchEnabled: searchEnabled,
              shouldSort: false
            });
          });
        }
      },
      flatPicker: function () {

        var picker = e.select('.flatpickr');
        if (isVariableDefined(picker)) {
          var element = e.selectAll('.flatpickr');
          element.forEach(function (item) {
            var mode = item.getAttribute('data-mode') == 'multiple' ? 'multiple' : item.getAttribute('data-mode') == 'range' ? 'range' : 'single';
            var enableTime = item.getAttribute('data-enabletime') == 'true' ? true : false;
            var noCalendar = item.getAttribute('data-nocalendar') == 'true' ? true : false;
            var inline = item.getAttribute('data-inline') == 'true' ? true : false;
            var dateFormat = item.getAttribute('data-date-format') ? item.getAttribute('data-date-format') : item.getAttribute('data-enabletime') == 'true' ? "h:i K" : "d M";

            // Include flatpickr library using CDN
            var script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/flatpickr';
            script.onload = function () {
              flatpickr(item, {
                mode: mode,
                enableTime: enableTime,
                noCalendar: noCalendar,
                inline: inline,
                animate: "false",
                position: "top",
                dateFormat: dateFormat,
                disableMobile: "true"
              });
            };

            document.head.appendChild(script);
          });
        }
      },
      // Add the missing select function
      select: function (selector) {
        return document.querySelector(selector);
      },
      selectAll: function (selector) {
        return document.querySelectorAll(selector);
      },
    };
    e.init();

  }, []);

  return (
    <div className="App">
      <header className="navbar-light header-sticky">
          <nav className="navbar navbar-expand-xl">
              <div className="container">
                  <a className="navbar-brand" href="index.html">
                      <img className="light-mode-item navbar-brand-item" src={logo} alt="logo" />
                      <img className="dark-mode-item navbar-brand-item" src={logolight} alt="logo" />
                  </a>
                  <ul className="nav flex-row align-items-center list-unstyled ms-xl-auto">
                      <li className="nav-item align-items-center d-none d-sm-flex position-relative me-sm-3">
                          <a href="#" className="icon-md btn btn-light mb-0 p-0 flex-shrink-0"><i className="bi bi-cloud-download-fill"></i></a>
                          <div className="ms-2 d-none d-md-block">
                              <h6 className="mb-0"><a href="#" className="stretched-link">Download the app</a></h6>
                              <p className="small mb-0 text-body">Get exciting welcome offers</p>
                          </div>
                      </li>
                      <li className="nav-item dropdown">
                          <a className="icon-md btn btn-light mb-0 p-0" href="#" id="languageDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="bi bi-globe"> </i>
                          </a>
                          <ul className="dropdown-menu dropdown-animation dropdown-menu-end min-w-auto mt-2" aria-labelledby="languageDropdown">
                              <li> <a className="dropdown-item me-4" href="#"><img className="fa-fw me-2" src={uk} alt="" />English</a> </li>
                              <li> <a className="dropdown-item me-4" href="#"><img className="fa-fw me-2" src={sp} alt="" />Español</a> </li>
                              <li> <a className="dropdown-item me-4" href="#"><img className="fa-fw me-2" src={fr} alt="" />Français</a> </li>
                              <li> <a className="dropdown-item me-4" href="#"><img className="fa-fw me-2" src={gr} alt="" />Deutsch</a> </li>
                          </ul>
                      </li>
                      <li className="nav-item ms-3">
                          <a href="sign-up.html" className="btn btn-sm btn-primary mb-0"><i className="fa-solid fa-right-to-bracket me-2"></i>Sign up</a>
                      </li>
                  </ul>
              </div>
          </nav>
      </header>
      <main>
          <section className="pt-0">
              <div className="container-fluid selection-bg">
                  <div className="row">
                      <div className="col-md-6 mx-auto text-center pt-7 pb-9">
                          <h1 className="text-white">Hotel, cab, flight & tour experience</h1>
                          <p className="lead text-white mb-0">Get the best prices on 2,000,000+ properties, worldwide</p>
                      </div>
                  </div>
              </div>
              <div className="container mt-n8">
                  <div className="row">
                      <div className="col-11 col-lg-8 col-xl-6 mx-auto">
                          <ul className="nav nav-tabs nav-bottom-line nav-justified nav-responsive bg-mode rounded-top z-index-9 position-relative pt-2 pb-0 px-4">
                              <li className="nav-item">
                                  <a className="nav-link mb-0" data-bs-toggle="tab" href="#tab-1-1"><i className="fa-solid fa-hotel fa-fw me-2"></i>Hotel</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link mb-0 active" data-bs-toggle="tab" href="#tab-1-2"><i className="fa-solid fa-plane fa-fw me-2"></i>Flight</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link mb-0" data-bs-toggle="tab" href="#tab-1-3"><i className="fa-solid fa-globe-americas fa-fw me-2"></i>Tour</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link mb-0" data-bs-toggle="tab" href="#tab-1-4"><i className="fa-solid fa-car fa-fw me-2"></i>Cabs</a>
                              </li>
                          </ul>
                      </div>
                      <div className="col-12">
                          <div className="tab-content" id="nav-tabContent">
                              <div className="tab-pane fade" id="tab-1-1">
                                  <form className="card shadow p-0">
                                      <div className="card-header p-4">
                                          <h5 className="mb-0"><i className="fa-solid fa-hotel fa-fw me-2"></i>Hotel Booking</h5>
                                      </div>
                                      <div className="card-body p-4 pt-0">
                                          <div className="row g-4">
                                              <div className="col-12">
                                                  <div className="form-icon-input form-size-lg form-fs-lg">
                                                      <select className="form-select js-choice" data-search-enabled="true">
                                                          <option value="">Search hotel</option>
                                                          <option>San Jacinto, USA</option>
                                                          <option>North Dakota, Canada</option>
                                                          <option>West Virginia, Paris</option>
                                                      </select>
                                                      <span className="form-icon"><i className="bi bi-search fs-5"></i></span>
                                                  </div>
                                              </div>

                                              <div className="col-lg-4">
                                                  <div className="form-icon-input form-fs-lg">
                                                      <div className="dropdown guest-selector me-2">
                                                          <input type="text" className="form-guest-selector form-control form-control-lg selection-result" placeholder="Select occupant" data-bs-auto-close="outside" data-bs-toggle="dropdown" />
                                                          <ul className="dropdown-menu guest-selector-dropdown">
                                                              <li className="d-flex justify-content-between">
                                                                  <div>
                                                                      <h6 className="mb-0">Adults</h6>
                                                                      <small>Ages 13 or above</small>
                                                                  </div>

                                                                  <div className="hstack gap-1 align-items-center">
                                                                      <button type="button" className="btn btn-link adult-remove p-0 mb-0"><i className="bi bi-dash-circle fs-5 fa-fw"></i></button>
                                                                      <h6 className="guest-selector-count mb-0 adults">2</h6>
                                                                      <button type="button" className="btn btn-link adult-add p-0 mb-0"><i className="bi bi-plus-circle fs-5 fa-fw"></i></button>
                                                                  </div>
                                                              </li>
                                                              <li className="dropdown-divider"></li>
                                                              <li className="d-flex justify-content-between">
                                                                  <div>
                                                                      <h6 className="mb-0">Child</h6>
                                                                      <small>Ages 13 below</small>
                                                                  </div>

                                                                  <div className="hstack gap-1 align-items-center">
                                                                      <button type="button" className="btn btn-link child-remove p-0 mb-0" ><i className="bi bi-dash-circle fs-5 fa-fw"></i></button>
                                                                      <h6 className="guest-selector-count mb-0 child">0</h6>
                                                                      <button type="button" className="btn btn-link child-add p-0 mb-0" ><i className="bi bi-plus-circle fs-5 fa-fw"></i></button>
                                                                  </div>
                                                              </li>
                                                              <li className="dropdown-divider"></li>
                                                              <li className="d-flex justify-content-between">
                                                                  <div>
                                                                      <h6 className="mb-0">Rooms</h6>
                                                                      <small>Max room 8</small>
                                                                  </div>

                                                                  <div className="hstack gap-1 align-items-center">
                                                                      <button type="button" className="btn btn-link room-remove p-0 mb-0" ><i className="bi bi-dash-circle fs-5 fa-fw"></i></button>
                                                                      <h6 className="guest-selector-count mb-0 rooms">1</h6>
                                                                      <button type="button" className="btn btn-link room-add p-0 mb-0" ><i className="bi bi-plus-circle fs-5 fa-fw"></i></button>
                                                                  </div>
                                                              </li>
                                                          </ul>
                                                      </div>
                                                      <span className="form-icon"><i className="bi bi-people fs-5"></i></span>
                                                  </div>
                                              </div>
                                              <div className="col-lg-4">
                                                  <div className="form-icon-input form-fs-lg">
                                                      <input type="text" className="form-control form-control-lg flatpickr" data-date-format="d/m/y" placeholder="Select check-in date" />
                                                      <span className="form-icon"><i className="bi bi-calendar fs-5"></i></span>
                                                  </div>
                                              </div>
                                              <div className="col-lg-4">
                                                  <div className="form-icon-input form-fs-lg">
                                                      <input type="text" className="form-control form-control-lg flatpickr" data-date-format="d/m/y" placeholder="Select check-out date" />
                                                      <span className="form-icon"><i className="bi bi-calendar fs-5"></i></span>
                                                  </div>
                                              </div>

                                          </div>
                                          <div className="text-center pt-0">
                                              <a className="btn btn-lg btn-primary mb-n7" href="#">Search Hotel <i className="bi bi-arrow-right ps-3"></i></a>
                                          </div>
                                      </div>
                                  </form>
                              </div>
                              <div className="tab-pane fade show active" id="tab-1-2">
                                  <form className="card shadow p-0">
                                      <div className="card-header p-4">
                                          <div className="row g-4 align-items-center">
                                              <div className="col-lg-4 col-xl-6">
                                                  <h5 className="mb-0"><i className="fa-solid fa-plane fa-fw me-2"></i>Flight Booking</h5>
                                              </div>
                                              <div className="col-md-6 col-lg-4 col-xl-3 ms-auto">
                                                  <div className="nav nav-pills" id="pills-tab" role="tablist">
                                                      <div className="form-check form-check-inline active" id="flight-one-way-tab" data-bs-toggle="pill" data-bs-target="#flight-one-way" role="tab" aria-controls="flight-one-way" aria-selected="true">
                                                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" defaultChecked />
                                                          <label className="form-check-label" htmlFor="inlineRadio1">One Way</label>
                                                      </div>
                                                      <div className="form-check form-check-inline" id="flight-round-way-tab" data-bs-toggle="pill" data-bs-target="#flight-round-way" role="tab" aria-controls="flight-round-way" aria-selected="false">
                                                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                          <label className="form-check-label" htmlFor="inlineRadio2">Round Trip</label>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-md-6 col-lg-4 col-xl-3 ms-auto">
                                                  <div className="form-control-bg-light border rounded form-fs-md">
                                                      <select className="form-select js-choice" aria-label=".form-select-sm">
                                                          <option value="">Select ClassName</option>
                                                          <option>Economy</option>
                                                          <option>Premium Economy</option>
                                                          <option>Business</option>
                                                          <option>First ClassName</option>
                                                      </select>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="card-body p-4 pt-0">
                                          <div className="tab-content" id="pills-tabContent">
                                              <div className="tab-pane fade show active" id="flight-one-way" role="tabpanel" aria-labelledby="flight-one-way-tab">
                                                  <div className="row g-4">
                                                      <div className="col-md-6 position-relative">
                                                          <div className="form-icon-input form-size-lg form-fs-lg">
                                                              <select className="form-select js-choice" data-search-enabled="true">
                                                                  <option value="">Flying from...</option>
                                                                  <option>San Jacinto, USA</option>
                                                                  <option>North Dakota, Canada</option>
                                                                  <option>West Virginia, Paris</option>
                                                              </select>
                                                              <span className="form-icon"><i className="bi bi-geo-alt fs-5"></i></span>
                                                          </div>
                                                          <div className="btn-flip-icon z-index-9">
                                                              <button className="btn btn-dark shadow btn-round mb-0"><i className="fa-solid fa-right-left"></i></button>
                                                          </div>
                                                      </div>
                                                      <div className="col-md-6">
                                                          <div className="form-icon-input form-size-lg form-fs-lg">
                                                              <select className="form-select js-choice" data-search-enabled="true">
                                                                  <option value="">Flying to...</option>
                                                                  <option>San Jacinto, USA</option>
                                                                  <option>North Dakota, Canada</option>
                                                                  <option>West Virginia, Paris</option>
                                                              </select>
                                                              <span className="form-icon"><i className="bi bi-send fs-5"></i></span>
                                                          </div>
                                                      </div>
                                                      <div className="col-md-6">
                                                          <div className="form-icon-input form-fs-lg">
                                                              <input type="text" className="form-control form-control-lg flatpickr" data-date-format="d/M/Y"  placeholder="Select check-in date" />
                                                              <span className="form-icon"><i className="bi bi-calendar fs-5"></i></span>
                                                          </div>
                                                      </div>
                                                      <div className="col-md-6">
                                                          <div className="form-icon-input form-fs-lg">
                                                              <input type="text" className="form-control form-control-lg" placeholder="Select occupant" />
                                                              <span className="form-icon"><i className="bi bi-people fs-5"></i></span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="text-center pt-0">
                                                      <a className="btn btn-lg btn-primary mb-n7" href="#">Search Flight <i className="bi bi-arrow-right ps-3"></i></a>
                                                  </div>
                                              </div>
                                              <div className="tab-pane fade" id="flight-round-way" role="tabpanel" aria-labelledby="flight-round-way-tab">
                                                  <div className="row g-4">
                                                      <div className="col-md-6 position-relative">
                                                          <div className="form-icon-input form-size-lg form-fs-lg">
                                                              <select className="form-select js-choice" data-search-enabled="true">
                                                                  <option value="">Flying from...</option>
                                                                  <option>San Jacinto, USA</option>
                                                                  <option>North Dakota, Canada</option>
                                                                  <option>West Virginia, Paris</option>
                                                              </select>
                                                              <span className="form-icon"><i className="bi bi-geo-alt fs-5"></i></span>
                                                          </div>
                                                          <div className="btn-flip-icon z-index-9">
                                                              <button className="btn btn-dark shadow btn-round mb-0"><i className="fa-solid fa-right-left"></i></button>
                                                          </div>
                                                      </div>
                                                      <div className="col-md-6">
                                                          <div className="form-icon-input form-size-lg form-fs-lg">
                                                              <select className="form-select js-choice" data-search-enabled="true">
                                                                  <option value="">Flying to...</option>
                                                                  <option>San Jacinto, USA</option>
                                                                  <option>North Dakota, Canada</option>
                                                                  <option>West Virginia, Paris</option>
                                                              </select>
                                                              <span className="form-icon"><i className="bi bi-send fs-5"></i></span>
                                                          </div>
                                                      </div>
                                                      <div className="col-md-4">
                                                          <div className="form-icon-input form-fs-lg">
                                                              <input type="text" className="form-control form-control-lg flatpickr" data-date-format="d/M/Y" placeholder="Select check-in date" />
                                                              <span className="form-icon"><i className="bi bi-calendar fs-5"></i></span>
                                                          </div>
                                                      </div>
                                                      <div className="col-md-4">
                                                          <div className="form-icon-input form-fs-lg">
                                                              <input type="text" className="form-control form-control-lg flatpickr" data-date-format="d/M/Y" placeholder="Select check-out date" />
                                                              <span className="form-icon"><i className="bi bi-calendar fs-5"></i></span>
                                                          </div>
                                                      </div>
                                                      <div className="col-md-4">
                                                          <div className="form-icon-input form-fs-lg">
                                                              <input type="text" className="form-control form-control-lg" placeholder="Select occupant" />
                                                              <span className="form-icon"><i className="bi bi-people fs-5"></i></span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="col-12 text-center pt-0">
                                                      <a className="btn btn-lg btn-primary mb-n7" href="#">Search Flight <i className="bi bi-arrow-right ps-3"></i></a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </form>
                              </div>
                              <div className="tab-pane fade" id="tab-1-3">
                                  <form className="card shadow p-0">
                                      <div className="card-header p-4">
                                          <h5 className="mb-0"><i className="fa-solid fa-globe-americas fa-fw me-2"></i>Tour Booking</h5>
                                      </div>
                                      <div className="card-body p-4 pt-0">
                                          <div className="row g-4">
                                              <div className="col-lg-4">
                                                  <div className="form-icon-input form-size-lg form-fs-lg">
                                                      <select className="form-select js-choice" data-search-enabled="true">
                                                          <option value="">Select tour location</option>
                                                          <option>San Jacinto, USA</option>
                                                          <option>North Dakota, Canada</option>
                                                          <option>West Virginia, Paris</option>
                                                      </select>
                                                      <span className="form-icon"><i className="bi bi-geo-alt fs-5"></i></span>
                                                  </div>
                                              </div>
                                              <div className="col-lg-4">
                                                  <div className="form-icon-input form-fs-lg">
                                                      <input type="text" className="form-control form-control-lg flatpickr" data-date-format="d/M/Y" placeholder="Select date" />
                                                      <span className="form-icon"><i className="bi bi-calendar fs-5"></i></span>
                                                  </div>
                                              </div>
                                              <div className="col-lg-4">
                                                  <div className="form-icon-input form-size-lg form-fs-lg">
                                                      <select className="form-select js-choice" data-search-enabled="true">
                                                          <option value="">Select tour type</option>
                                                          <option>Adventure</option>
                                                          <option>Beach</option>
                                                          <option>Desert</option>
                                                          <option>History</option>
                                                      </select>
                                                      <span className="form-icon"><i className="fa-solid fa-person-skating fs-5"></i></span>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="text-center pt-0">
                                              <a className="btn btn-lg btn-primary mb-n7" href="#">Search Tour <i className="bi bi-arrow-right ps-3"></i></a>
                                          </div>
                                      </div>
                                  </form>
                              </div>
                              <div className="tab-pane fade" id="tab-1-4">
                                  <form className="card shadow p-0">
                                      <div className="card-header d-sm-flex justify-content-between align-items-center p-4">
                                          <h5 className="mb-3 mb-sm-0"><i className="fa-solid fa-car fa-fw me-2"></i>Cab Booking</h5>
                                          <ul className="nav nav-pills nav-pills-dark" id="pills-tab-2" role="tablist">
                                              <li className="nav-item" role="presentation">
                                                  <button className="nav-link mb-0 rounded-start rounded-0 active" id="pills-one-way-2-tab" data-bs-toggle="pill" data-bs-target="#pills-one-way-2" type="button" role="tab" aria-selected="true">One Way</button>
                                              </li>
                                              <li className="nav-item" role="presentation">
                                                  <button className="nav-link mb-0 rounded-end rounded-0" id="pills-round-way-2-tab" data-bs-toggle="pill" data-bs-target="#pills-round-way-2" type="button" role="tab" aria-selected="false">Road Trip</button>
                                              </li>
                                          </ul>
                                      </div>
                                      <div className="card-body p-4 pt-0">
                                          <div className="tab-content" id="pills-tabContent3">
                                              <div className="tab-pane fade show active" id="pills-one-way-2" role="tabpanel" aria-labelledby="pills-one-way-2-tab">
                                                  <div className="row g-4">
                                                      <div className="col-md-6 position-relative">
                                                          <div className="form-icon-input form-size-lg form-fs-lg">
                                                              <select className="form-select js-choice" data-search-enabled="true">
                                                                  <option value="">Select pickup location</option>
                                                                  <option>San Jacinto, USA</option>
                                                                  <option>North Dakota, Canada</option>
                                                                  <option>West Virginia, Paris</option>
                                                              </select>
                                                              <span className="form-icon"><i className="bi bi-geo-alt fs-5"></i></span>
                                                          </div>
                                                          <div className="btn-flip-icon z-index-9">
                                                              <button className="btn btn-white shadow btn-round mb-0"><i className="fa-solid fa-right-left"></i></button>
                                                          </div>
                                                      </div>
                                                      <div className="col-md-6">
                                                          <div className="form-icon-input form-size-lg form-fs-lg">
                                                              <select className="form-select js-choice" data-search-enabled="true">
                                                                  <option value="">Select drop location</option>
                                                                  <option>San Jacinto, USA</option>
                                                                  <option>North Dakota, Canada</option>
                                                                  <option>West Virginia, Paris</option>
                                                              </select>
                                                              <span className="form-icon"><i className="bi bi-geo-alt fs-5"></i></span>
                                                          </div>
                                                      </div>
                                                      <div className="col-md-6">
                                                          <div className="form-icon-input form-fs-lg">
                                                              <input type="text" className="form-control form-control-lg flatpickr" data-date-format="d/M/Y" placeholder="Select pickup date" />
                                                              <span className="form-icon"><i className="bi bi-calendar fs-5"></i></span>
                                                          </div>
                                                      </div>
                                                      <div className="col-md-6">
                                                          <div className="form-icon-input form-fs-lg">
                                                              <input type="text" className="form-control form-control-lg flatpickr" placeholder="Select pickup time" data-nocalendar="true" data-enabletime="true" />
                                                              <span className="form-icon"><i className="bi bi-calendar fs-5"></i></span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="text-center pt-0">
                                                      <a className="btn btn-lg btn-primary mb-n7" href="#">Search Cabs <i className="bi bi-arrow-right ps-3"></i></a>
                                                  </div>
                                              </div>
                                              <div className="tab-pane fade" id="pills-round-way-2" role="tabpanel" aria-labelledby="pills-round-way-2-tab">
                                                  <div className="row g-4">
                                                      <div className="col-md-6 position-relative">
                                                          <div className="form-icon-input form-size-lg form-fs-lg">
                                                              <select className="form-select js-choice" data-search-enabled="true">
                                                                  <option value="">Select pickup location</option>
                                                                  <option>San Jacinto, USA</option>
                                                                  <option>North Dakota, Canada</option>
                                                                  <option>West Virginia, Paris</option>
                                                              </select>
                                                              <span className="form-icon"><i className="bi bi-geo-alt fs-5"></i></span>
                                                          </div>
                                                          <div className="btn-flip-icon z-index-9">
                                                              <button className="btn btn-white shadow btn-round mb-0"><i className="fa-solid fa-right-left"></i></button>
                                                          </div>
                                                      </div>
                                                      <div className="col-md-6">
                                                          <div className="form-icon-input form-size-lg form-fs-lg">
                                                              <select className="form-select js-choice" data-search-enabled="true">
                                                                  <option value="">Select drop location</option>
                                                                  <option>San Jacinto, USA</option>
                                                                  <option>North Dakota, Canada</option>
                                                                  <option>West Virginia, Paris</option>
                                                              </select>
                                                              <span className="form-icon"><i className="bi bi-geo-alt fs-5"></i></span>
                                                          </div>
                                                      </div>
                                                      <div className="col-md-6 col-lg-3">
                                                          <div className="form-icon-input form-fs-lg">
                                                              <input type="text" className="form-control form-control-lg flatpickr" data-date-format="d/M/Y" placeholder="Select pickup date" />
                                                              <span className="form-icon"><i className="bi bi-calendar fs-5"></i></span>
                                                          </div>
                                                      </div>
                                                      <div className="col-md-6 col-lg-3">
                                                          <div className="form-icon-input form-fs-lg">
                                                              <input type="text" className="form-control form-control-lg flatpickr" placeholder="Select pickup time" data-nocalendar="true" data-enabletime="true" />
                                                              <span className="form-icon"><i className="bi bi-calendar fs-5"></i></span>
                                                          </div>
                                                      </div>
                                                      <div className="col-md-6 col-lg-3">
                                                          <div className="form-icon-input form-fs-lg">
                                                              <input type="text" className="form-control form-control-lg flatpickr" data-date-format="d/M/Y" placeholder="Select return date" />
                                                              <span className="form-icon"><i className="bi bi-calendar fs-5"></i></span>
                                                          </div>
                                                      </div>
                                                      <div className="col-md-6 col-lg-3">
                                                          <div className="form-icon-input form-fs-lg">
                                                              <input type="text" className="form-control form-control-lg flatpickr" placeholder="Select return time" data-nocalendar="true" data-enabletime="true" />
                                                              <span className="form-icon"><i className="bi bi-calendar fs-5"></i></span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="text-center pt-0">
                                                      <a className="btn btn-lg btn-primary mb-n7" href="#">Search cabs <i className="bi bi-arrow-right ps-3"></i></a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section>
              <div className="container">
                  <div className="row g-4">

                      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                          <div className="card card-body bg-light h-100 align-items-center justify-content-center">
                              <div className="d-flex align-items-center">
                                  <img src={beach} className="h-30px me-3" alt="" />
                                  <h6 className="card-title mb-0"><a href="#" className="stretched-link">Beaches</a></h6>
                              </div>
                          </div>
                      </div>

                      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                          <div className="card card-body bg-light h-100 align-items-center justify-content-center">
                              <div className="d-flex align-items-center">
                                  <img src={island} className="h-30px me-3" alt="" />
                                  <h6 className="card-title mb-0"><a href="#" className="stretched-link">Islands</a></h6>
                              </div>
                          </div>
                      </div>

                      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                          <div className="card card-body bg-light h-100 align-items-center justify-content-center">
                              <div className="d-flex align-items-center">
                                  <img src={pool} className="h-30px me-3" alt="" />
                                  <h6 className="card-title mb-0"><a href="#" className="stretched-link">Amazing Pools</a></h6>
                              </div>
                          </div>
                      </div>

                      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                          <div className="card card-body bg-light h-100 align-items-center justify-content-center">
                              <div className="d-flex align-items-center">
                                  <img src={camping} className="h-30px me-3" alt="" />
                                  <h6 className="card-title mb-0"><a href="#" className="stretched-link">Camping</a></h6>
                              </div>
                          </div>
                      </div>

                      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                          <div className="card card-body bg-light h-100 align-items-center justify-content-center">
                              <div className="d-flex align-items-center">
                                  <img src={cabin} className="h-30px me-3" alt="" />
                                  <h6 className="card-title mb-0"><a href="#" className="stretched-link">Cabin</a></h6>
                              </div>
                          </div>
                      </div>

                      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                          <div className="card card-body bg-light h-100 align-items-center justify-content-center">
                              <div className="d-flex align-items-center">
                                  <img src={lake} className="h-30px me-3" alt="" />
                                  <h6 className="card-title mb-0"><a href="#" className="stretched-link">Lake Front</a></h6>
                              </div>
                          </div>
                      </div>

                      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                          <div className="card card-body bg-light h-100 align-items-center justify-content-center">
                              <div className="d-flex align-items-center">
                                  <img src={park} className="h-30px me-3" alt="" />
                                  <h6 className="card-title mb-0"><a href="#" className="stretched-link">National Park</a></h6>
                              </div>
                          </div>
                      </div>

                      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                          <div className="card card-body bg-light h-100 align-items-center justify-content-center">
                              <div className="d-flex align-items-center">
                                  <img src={cave} className="h-30px me-3" alt="" />
                                  <h6 className="card-title mb-0"><a href="#" className="stretched-link">Caves</a></h6>
                              </div>
                          </div>
                      </div>

                      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                          <div className="card card-body bg-light h-100 align-items-center justify-content-center">
                              <div className="d-flex align-items-center">
                                  <img src={surf} className="h-30px me-3" alt="" />
                                  <h6 className="card-title mb-0"><a href="#" className="stretched-link">Surfing</a></h6>
                              </div>
                          </div>
                      </div>

                      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                          <div className="card card-body bg-light h-100 align-items-center justify-content-center">
                              <div className="d-flex align-items-center">
                                  <img src={farm} className="h-30px me-3" alt="" />
                                  <h6 className="card-title mb-0"><a href="#" className="stretched-link">Farms</a></h6>
                              </div>
                          </div>
                      </div>

                      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                          <div className="card card-body bg-light h-100 align-items-center justify-content-center">
                              <div className="d-flex align-items-center">
                                  <img src={tower} className="h-30px me-3" alt="" />
                                  <h6 className="card-title mb-0"><a href="#" className="stretched-link">Towers</a></h6>
                              </div>
                          </div>
                      </div>

                      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                          <div className="card card-body bg-light h-100 align-items-center justify-content-center">
                              <div className="d-flex align-items-center">
                                  <img src={desert} className="h-30px me-3" alt="" />
                                  <h6 className="card-title mb-0"><a href="#" className="stretched-link">Desert</a></h6>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </section>
      </main>
      <footer className="bg-dark pt-5">
          <div className="container">
              <div className="row g-4">
                  <div className="col-lg-3">
                      <a href="index.html">
                          <img className="h-40px" src={logolight} alt="logo" />
                      </a>
                      <p className="my-3 text-body-secondary">Departure defective arranging rapturous did believe him all had supported.</p>
                      <p className="mb-2"><a href="#" className="text-body-secondary text-primary-hover"><i className="bi bi-telephone me-2"></i>+1234 568 963</a> </p>
                      <p className="mb-0"><a href="#" className="text-body-secondary text-primary-hover"><i className="bi bi-envelope me-2"></i>example@gmail.com</a></p>
                  </div>
                  <div className="col-lg-8 ms-auto">
                      <div className="row g-4">
                          <div className="col-6 col-md-3">
                              <h5 className="text-white mb-2 mb-md-4">Page</h5>
                              <ul className="nav flex-column text-primary-hover">
                                  <li className="nav-item"><a className="nav-link text-body-secondary" href="#">About us</a></li>
                                  <li className="nav-item"><a className="nav-link text-body-secondary" href="#">Contact us</a></li>
                                  <li className="nav-item"><a className="nav-link text-body-secondary" href="#">News and Blog</a></li>
                                  <li className="nav-item"><a className="nav-link text-body-secondary" href="#">Meet a Team</a></li>
                              </ul>
                          </div>
                          <div className="col-6 col-md-3">
                              <h5 className="text-white mb-2 mb-md-4">Link</h5>
                              <ul className="nav flex-column text-primary-hover">
                                  <li className="nav-item"><a className="nav-link text-body-secondary" href="#">Sign up</a></li>
                                  <li className="nav-item"><a className="nav-link text-body-secondary" href="#">Sign in</a></li>
                                  <li className="nav-item"><a className="nav-link text-body-secondary" href="#">Privacy Policy</a></li>
                                  <li className="nav-item"><a className="nav-link text-body-secondary" href="#">Terms</a></li>
                                  <li className="nav-item"><a className="nav-link text-body-secondary" href="#">Cookie</a></li>
                                  <li className="nav-item"><a className="nav-link text-body-secondary" href="#">Support</a></li>
                              </ul>
                          </div>
                          <div className="col-6 col-md-3">
                              <h5 className="text-white mb-2 mb-md-4">Global Site</h5>
                              <ul className="nav flex-column text-primary-hover">
                                  <li className="nav-item"><a className="nav-link text-body-secondary" href="#">India</a></li>
                                  <li className="nav-item"><a className="nav-link text-body-secondary" href="#">California</a></li>
                                  <li className="nav-item"><a className="nav-link text-body-secondary" href="#">Indonesia</a></li>
                                  <li className="nav-item"><a className="nav-link text-body-secondary" href="#">Canada</a></li>
                                  <li className="nav-item"><a className="nav-link text-body-secondary" href="#">Malaysia</a></li>
                              </ul>
                          </div>
                          <div className="col-6 col-md-3">
                              <h5 className="text-white mb-2 mb-md-4">Booking</h5>
                              <ul className="nav flex-column text-primary-hover">
                                  <li className="nav-item"><a className="nav-link text-body-secondary" href="#"><i className="fa-solid fa-hotel me-2"></i>Hotel</a></li>
                                  <li className="nav-item"><a className="nav-link text-body-secondary" href="#"><i className="fa-solid fa-plane me-2"></i>Flight</a></li>
                                  <li className="nav-item"><a className="nav-link text-body-secondary" href="#"><i className="fa-solid fa-globe-americas me-2"></i>Tour</a></li>
                                  <li className="nav-item"><a className="nav-link text-body-secondary" href="#"><i className="fa-solid fa-car me-2"></i>Cabs</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row mt-5">
                  <h5 className="mb-2 text-white">Top Links</h5>
                  <ul className="list-inline text-primary-hover lh-lg">
                      <li className="list-inline-item"><a href="#" className="text-body-secondary">Flights</a></li>
                      <li className="list-inline-item"><a href="#" className="text-body-secondary">Hotels</a></li>
                      <li className="list-inline-item"><a href="#" className="text-body-secondary">Tours</a></li>
                      <li className="list-inline-item"><a href="#" className="text-body-secondary">Cabs</a></li>
                      <li className="list-inline-item"><a href="#" className="text-body-secondary">About</a></li>
                      <li className="list-inline-item"><a href="#" className="text-body-secondary">Contact us</a></li>
                      <li className="list-inline-item"><a href="#" className="text-body-secondary">Blogs</a></li>
                      <li className="list-inline-item"><a href="#" className="text-body-secondary">Services</a></li>
                      <li className="list-inline-item"><a href="#" className="text-body-secondary">Detail page</a></li>
                      <li className="list-inline-item"><a href="#" className="text-body-secondary">Services</a></li>
                      <li className="list-inline-item"><a href="#" className="text-body-secondary">Policy</a></li>
                      <li className="list-inline-item"><a href="#" className="text-body-secondary">Testimonials</a></li>
                      <li className="list-inline-item"><a href="#" className="text-body-secondary">Newsletters</a></li>
                      <li className="list-inline-item"><a href="#" className="text-body-secondary">Podcasts</a></li>
                      <li className="list-inline-item"><a href="#" className="text-body-secondary">Protests</a></li>
                      <li className="list-inline-item"><a href="#" className="text-body-secondary">NewsCyber</a></li>
                      <li className="list-inline-item"><a href="#" className="text-body-secondary">Education</a></li>
                      <li className="list-inline-item"><a href="#" className="text-body-secondary">Sports</a></li>
                      <li className="list-inline-item"><a href="#" className="text-body-secondary">Tech and Auto</a></li>
                      <li className="list-inline-item"><a href="#" className="text-body-secondary">Opinion</a></li>
                      <li className="list-inline-item"><a href="#" className="text-body-secondary">Share Market</a></li>
                  </ul>
              </div>
              <div className="row g-4 justify-content-between mt-0 mt-md-2">
                  <div className="col-sm-7 col-md-6 col-lg-4">
                      <h5 className="text-white mb-2">Payment & Security</h5>
                      <ul className="list-inline mb-0 mt-3">
                          <li className="list-inline-item"> <a href="#"><img src={paypal} className="h-30px" alt="" /></a></li>
                          <li className="list-inline-item"> <a href="#"><img src={visa} className="h-30px" alt="" /></a></li>
                          <li className="list-inline-item"> <a href="#"><img src={mastercard} className="h-30px" alt="" /></a></li>
                          <li className="list-inline-item"> <a href="#"><img src={expresscard} className="h-30px" alt="" /></a></li>
                      </ul>
                  </div>
                  <div className="col-sm-5 col-md-6 col-lg-3 text-sm-end">
                      <h5 className="text-white mb-2">Follow us on</h5>
                      <ul className="list-inline mb-0 mt-3">
                          <li className="list-inline-item"> <a className="btn btn-sm px-2 bg-facebook mb-0" href="#"><i className="fab fa-fw fa-facebook-f"></i></a> </li>
                          <li className="list-inline-item"> <a className="btn btn-sm shadow px-2 bg-instagram mb-0" href="#"><i className="fab fa-fw fa-instagram"></i></a> </li>
                          <li className="list-inline-item"> <a className="btn btn-sm shadow px-2 bg-twitter mb-0" href="#"><i className="fab fa-fw fa-twitter"></i></a> </li>
                          <li className="list-inline-item"> <a className="btn btn-sm shadow px-2 bg-linkedin mb-0" href="#"><i className="fab fa-fw fa-linkedin-in"></i></a> </li>
                      </ul>
                  </div>
              </div>
              <hr className="mt-4 mb-0" />
              <div className="row">
                  <div className="container">
                      <div className="d-lg-flex justify-content-between align-items-center py-3 text-center text-lg-start">
                          <div className="text-body-secondary text-primary-hover"> Copyrights ©2023 Booking. Build by <a href="https://www.webestica.com/" className="text-body-secondary">Webestica</a>. </div>
                          <div className="nav mt-2 mt-lg-0">
                              <ul className="list-inline text-primary-hover mx-auto mb-0">
                                  <li className="list-inline-item me-0"><a className="nav-link text-body-secondary py-1" href="#">Privacy policy</a></li>
                                  <li className="list-inline-item me-0"><a className="nav-link text-body-secondary py-1" href="#">Terms and conditions</a></li>
                                  <li className="list-inline-item me-0"><a className="nav-link text-body-secondary py-1 pe-0" href="#">Refund policy</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
      <div className="back-top"></div>
    </div>
  );
}

export default App;
