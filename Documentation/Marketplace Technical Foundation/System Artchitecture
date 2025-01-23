

                   +-------------+  
                   | User Browses|  
                   | Products    |  
                   +------+------+  
                          |  
                          v  
                   +------+------+  
                   | Get Product |  
                   | Info from   |  
                   | Headless CMS|  
                   +------+------+  
                          |  
                          |  
                   +------+------+          +------------------+  
                   | Add to Cart|          | User Proceeding  |  
                   +------+-----+          | to Checkout      |  
                          |                    +-------------------+  
                          v                                  |  
                   +------+------                      +-------+-------+  
                   | Update Cart |                    | Collect       |  
                   +------+------ +                    | Shipping and  |  
                          |                             | Payment Info  |  
                          |                             +-------+-------+  
                   +------+-------+                             |  
                   | Calculate    |                             |  
                   | Cart Totals  |                             v  
                   +------+-------+                    +--------+-------+  
                          |                             | Process Payment |  
                   +------+-------+                     +--------+-------+  
                   | Confirm Order |                               |  
                   | (Create Order)|                               |  
                   +------+-------+                                v  
                          |                             +--------+--------+  
                          |                             | Order Confirmed  |  
                   +------+-------+                     +--------+--------+  
                   | Call Shipping |                              |  
                   | Service API   |                              v  
                   +------+-------+                     +--------+---------+   
                          |                             | Generate Shipping |   
                          v                             | Label             |  
                   +------+-------+                     +--------+---------+  
                   | Update Order  |                              |  
                   | with Shipping  |                             v  
                   +----------------+                     +--------+---------+  
                                                            | Notify User     |  
                                                            +-----------------+