import Service from '../../balancer-subgraph.service';
import { PoolShare, QueryBuilder } from '../../types';
import poolQueryBuilder from './query';

export default class PoolShares {
  service: Service;
  query: QueryBuilder;

  constructor(service: Service, query: QueryBuilder = poolQueryBuilder) {
    this.service = service;
    this.query = query;
  }

  public async get(args = {}, attrs = {}): Promise<PoolShare[]> {
    const query = this.query(args, attrs);
    const data = await this.service.client.get(query);
    return data.poolShares;
  }
}
