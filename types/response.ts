export interface eror {
    ok: boolean;
    res: {
      name: string;
      message: string;
    };
  };

export interface apiResponse {
    ok: boolean;
    data: any;
    token?:string;
}


export interface child{
  children: React.ReactNode;
}