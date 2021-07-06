//* App page *//
export interface AppProps extends NavProps { }
export interface AppState { }

//* Navigation *//
export interface NavProps {
  navigation?: any;
  route?: any;
}

//* Perferences page *//
export interface PerferencesProps extends NavProps { }
export interface PerferencesState {
  inputValue: string;
  measurementType: string;
  invalidInputs: boolean;
  useLocation: boolean;
  location: any;
}

//* Results page *//
export interface ResultsPageProps extends NavProps { }
export interface ResultsPageState {
  currentWeather: any;
  measurement: string;
  dayOne: string;
  dayTwo: string;
  dayThree: string;
  dailyWeather: any;
}