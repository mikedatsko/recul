import { call } from 'redux-saga/effects';
import CoraSaga from './Cora.saga';

export default function* () {
  yield call(CoraSaga);
}
