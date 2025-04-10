# SQL

## ”次の行”を考慮する

LEAD()で次の行を読める。

```sql
WITH OrderHistory AS ( 
  SELECT
    OrderNumber
    , HistoryNumber
    , ReceivedOn
    , LEAD(ReceivedOn) OVER (PARTITION BY OrderNumber ORDER BY HistoryNumber) AS next_received_on 
  FROM
    Orders
) 
SELECT
  OrderNumber
  , HistoryNumber
  , ReceivedOn
  , next_received_on 
FROM
  OrderHistory 
WHERE
  next_received_on IS NOT NULL 
  AND (next_received_on - ReceivedOn) <= 30
```
