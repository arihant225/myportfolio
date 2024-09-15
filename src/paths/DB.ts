import {createClient, SupabaseClient} from  '@supabase/supabase-js'
import { IArticles } from '../Interfaces/Articles';

export class DBConnect{
    supabase:SupabaseClient
    constructor(){
        const supabaseUrl = 'https://kvllcnhaynxnjtgukihk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2bGxjbmhheW54bmp0Z3VraWhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYzOTM5NzMsImV4cCI6MjA0MTk2OTk3M30.nImUUcGMC_7jhOOvdG7HbMqzelmYQHxdykDbPiq1A8Q';
 this.supabase = createClient(supabaseUrl, supabaseKey);
}

async getArticles(){
  let items= await (await this.supabase.from('Articles').select("*")).data as IArticles[]
  return items
}

async postArticles(article:IArticles){
  await this.supabase.from('Articles').insert(article)
}
}