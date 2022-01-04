import React from "react";
import { NavLink } from "react-router-dom";

const MainNavBar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink end className="navbar-brand" to="/allcontracts">
                  PlegBloc
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        end
                        className={({ isActive }) =>
                          "nav-link" + (isActive ? " menu_active" : "")
                        }
                        aria-current="page"
                        to="/allcontracts"
                      >
                        Campaigns
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          "nav-link" + (isActive ? " menu_active" : "")
                        }
                        to="/contributions"
                      >
                        Contributions
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          "nav-link" + (isActive ? " menu_active" : "")
                        }
                        to="/personalcampaigns"
                      >
                        My Campaigns
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          "nav-link" + (isActive ? " menu_active" : "")
                        }
                        to="/createcontract"
                      >
                        Create Campaign
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          "nav-link" + (isActive ? " menu_active" : "")
                        }
                        to="/vendorRegistration"
                      >
                        Register Vendor
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          "nav-link" + (isActive ? " menu_active" : "")
                        }
                        to="/profile"
                      >
                        Profile
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNavBar;
