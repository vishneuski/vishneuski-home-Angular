import {Injectable} from '@angular/core';
import {Log} from '../models/Log';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable()
export class LogService {
  logsCollection: AngularFirestoreCollection<Log>;
  logDoc: AngularFirestoreDocument<Log>;
  logs: Observable<Log[]>;
  log: Observable<Log>;

  constructor(private afs: AngularFirestore) {
    this.logsCollection = this.afs.collection('logs', ref => ref.orderBy('text', 'asc'));
  }

  getLogs(): Observable<Log[]> {
    this.logs = this.logsCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Log;
          data.id = action.payload.doc.id;
          return data;
        });
      })
    );

    return this.logs;
  }

  newLog(log: Log) {
    this.logsCollection.add(log);
  }

  getLog(id: string): Observable<Log> {
    this.logDoc = this.afs.doc<Log>(`logs/${id}`);
    this.log = this.logDoc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as Log;
          data.id = action.payload.id;
          return data;
        }
      })
    );

    return this.log;
  }

  updateLog(log: Log) {
    this.logDoc = this.afs.doc(`logs/${log.id}`);
    this.logDoc.update(log);
  }

  deleteLog(log: Log) {
    this.logDoc = this.afs.doc(`logs/${log.id}`);
    this.logDoc.delete();
  }
}
