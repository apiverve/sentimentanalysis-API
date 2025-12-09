declare module '@apiverve/sentimentanalysis' {
  export interface sentimentanalysisOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface sentimentanalysisResponse {
    status: string;
    error: string | null;
    data: SentimentAnalysisData;
    code?: number;
  }


  interface SentimentAnalysisData {
      comparative:   number;
      sentimentText: string;
      sentiment:     number;
  }

  export default class sentimentanalysisWrapper {
    constructor(options: sentimentanalysisOptions);

    execute(callback: (error: any, data: sentimentanalysisResponse | null) => void): Promise<sentimentanalysisResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: sentimentanalysisResponse | null) => void): Promise<sentimentanalysisResponse>;
    execute(query?: Record<string, any>): Promise<sentimentanalysisResponse>;
  }
}
