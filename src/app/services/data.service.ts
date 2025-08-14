import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Program {
  id?: string;
  title: string;  
  image?: string;
  badge?: string;
}

export interface User {
  id?: string;
  name: string;
  level: string;
  avatar: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private firestore: Firestore) {}

  getPrograms(): Observable<Program[]> {
    const programsRef = collection(this.firestore, 'programs');
    return collectionData(programsRef, { idField: 'id' }) as Observable<Program[]>;
  }

  getUsers(): Observable<User[]> {
    const usersRef = collection(this.firestore, 'users');
    return collectionData(usersRef, { idField: 'id' }) as Observable<User[]>;
  }
}
