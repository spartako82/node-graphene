import sys
sys.path = ["../"] + sys.path
import CppHeaderParser


#cppHeader = CppHeaderParser.CppHeader("wallet.hpp")
#wallet = cppHeader.classes["wallet_api"];
cppHeader = CppHeaderParser.CppHeader("database_api.hpp")
wallet = cppHeader.classes["database_api"];
for k in wallet["methods"]["public"]:
    name = k["name"]
    params = [t["name"] for t in k["parameters"]]
    paramsStr = ",".join(params)
    if(len(params) > 0):
        paramsStr += ","
    #print(k["name"],[t["name"] for t in k["parameters"]])
    s = """client.%s = function(%s_cb){
      client.send(0,"%s",[%s],_cb);
    };""" % (name,paramsStr,name,",".join(params))
    print(s)
    
