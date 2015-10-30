var libClient = require('./client');

// Create client for using witness api
var createWitnessClient = function(url,cb){
  libClient.createClient(url,function(err,client){
    if(err){
      cb(err);
      return;
    }
    // Set client witness apis
    ///////////////////////////////////

    client.get_objects = function(ids,_cb){
      client.send(0,"get_objects",[ids],_cb);
    };
    client.set_subscribe_callback = function(cb,clear_filter,_cb){
      client.send(0,"set_subscribe_callback",[cb,clear_filter],_cb);
    };
    client.set_pending_transaction_callback = function(cb,_cb){
      client.send(0,"set_pending_transaction_callback",[cb],_cb);
    };
    client.set_block_applied_callback = function(cb,_cb){
      client.send(0,"set_block_applied_callback",[cb],_cb);
    };
    client.cancel_all_subscriptions = function(_cb){
      client.send(0,"cancel_all_subscriptions",[],_cb);
    };
    client.get_block_header = function(block_num,_cb){
      client.send(0,"get_block_header",[block_num],_cb);
    };
    client.get_block = function(block_num,_cb){
      client.send(0,"get_block",[block_num],_cb);
    };
    client.get_transaction = function(block_num,trx_in_block,_cb){
      client.send(0,"get_transaction",[block_num,trx_in_block],_cb);
    };
    client.get_chain_properties = function(_cb){
      client.send(0,"get_chain_properties",[],_cb);
    };
    client.get_global_properties = function(_cb){
      client.send(0,"get_global_properties",[],_cb);
    };
    client.get_config = function(_cb){
      client.send(0,"get_config",[],_cb);
    };
    client.get_chain_id = function(_cb){
      client.send(0,"get_chain_id",[],_cb);
    };
    client.get_dynamic_global_properties = function(_cb){
      client.send(0,"get_dynamic_global_properties",[],_cb);
    };
    client.get_key_references = function(key,_cb){
      client.send(0,"get_key_references",[key],_cb);
    };
    client.get_accounts = function(account_ids,_cb){
      client.send(0,"get_accounts",[account_ids],_cb);
    };
    client.get_full_accounts = function(names_or_ids,subscribe,_cb){
      client.send(0,"get_full_accounts",[names_or_ids,subscribe],_cb);
    };
    client.get_account_by_name = function(name,_cb){
      client.send(0,"get_account_by_name",[name],_cb);
    };
    client.get_account_references = function(account_id,_cb){
      client.send(0,"get_account_references",[account_id],_cb);
    };
    client.lookup_account_names = function(account_names,_cb){
      client.send(0,"lookup_account_names",[account_names],_cb);
    };
    client.lookup_accounts = function(lower_bound_name,limit,_cb){
      client.send(0,"lookup_accounts",[lower_bound_name,limit],_cb);
    };
    client.get_account_balances = function(id,assets,_cb){
      client.send(0,"get_account_balances",[id,assets],_cb);
    };
    client.get_named_account_balances = function(name,assets,_cb){
      client.send(0,"get_named_account_balances",[name,assets],_cb);
    };
    client.get_balance_objects = function(addrs,_cb){
      client.send(0,"get_balance_objects",[addrs],_cb);
    };
    client.get_vested_balances = function(objs,_cb){
      client.send(0,"get_vested_balances",[objs],_cb);
    };
    client.get_vesting_balances = function(account_id,_cb){
      client.send(0,"get_vesting_balances",[account_id],_cb);
    };
    client.get_account_count = function(_cb){
      client.send(0,"get_account_count",[],_cb);
    };
    client.get_assets = function(asset_ids,_cb){
      client.send(0,"get_assets",[asset_ids],_cb);
    };
    client.list_assets = function(lower_bound_symbol,limit,_cb){
      client.send(0,"list_assets",[lower_bound_symbol,limit],_cb);
    };
    client.lookup_asset_symbols = function(symbols_or_ids,_cb){
      client.send(0,"lookup_asset_symbols",[symbols_or_ids],_cb);
    };
    client.get_limit_orders = function(a,b,limit,_cb){
      client.send(0,"get_limit_orders",[a,b,limit],_cb);
    };
    client.get_call_orders = function(a,limit,_cb){
      client.send(0,"get_call_orders",[a,limit],_cb);
    };
    client.get_settle_orders = function(a,limit,_cb){
      client.send(0,"get_settle_orders",[a,limit],_cb);
    };
    client.get_margin_positions = function(id,_cb){
      client.send(0,"get_margin_positions",[id],_cb);
    };
    client.subscribe_to_market = function(callback,a,b,_cb){
      client.send(0,"subscribe_to_market",[callback,a,b],_cb);
    };
    client.unsubscribe_from_market = function(a,b,_cb){
      client.send(0,"unsubscribe_from_market",[a,b],_cb);
    };
    client.get_witnesses = function(witness_ids,_cb){
      client.send(0,"get_witnesses",[witness_ids],_cb);
    };
    client.get_witness_by_account = function(account,_cb){
      client.send(0,"get_witness_by_account",[account],_cb);
    };
    client.lookup_witness_accounts = function(lower_bound_name,limit,_cb){
      client.send(0,"lookup_witness_accounts",[lower_bound_name,limit],_cb);
    };
    client.get_witness_count = function(_cb){
      client.send(0,"get_witness_count",[],_cb);
    };
    client.get_committee_members = function(committee_member_ids,_cb){
      client.send(0,"get_committee_members",[committee_member_ids],_cb);
    };
    client.get_committee_member_by_account = function(account,_cb){
      client.send(0,"get_committee_member_by_account",[account],_cb);
    };
    client.lookup_committee_member_accounts = function(lower_bound_name,limit,_cb){
      client.send(0,"lookup_committee_member_accounts",[lower_bound_name,limit],_cb);
    };
    client.get_workers_by_account = function(account,_cb){
      client.send(0,"get_workers_by_account",[account],_cb);
    };
    client.lookup_vote_ids = function(votes,_cb){
      client.send(0,"lookup_vote_ids",[votes],_cb);
    };
    client.get_transaction_hex = function(trx,_cb){
      client.send(0,"get_transaction_hex",[trx],_cb);
    };
    client.get_required_signatures = function(trx,available_keys,_cb){
      client.send(0,"get_required_signatures",[trx,available_keys],_cb);
    };
    client.get_potential_signatures = function(trx,_cb){
      client.send(0,"get_potential_signatures",[trx],_cb);
    };
    client.get_potential_address_signatures = function(trx,_cb){
      client.send(0,"get_potential_address_signatures",[trx],_cb);
    };
    client.verify_authority = function(trx,_cb){
      client.send(0,"verify_authority",[trx],_cb);
    };
    client.verify_account_authority = function(name_or_id,signers,_cb){
      client.send(0,"verify_account_authority",[name_or_id,signers],_cb);
    };
    client.validate_transaction = function(trx,_cb){
      client.send(0,"validate_transaction",[trx],_cb);
    };
    client.get_required_fees = function(ops,id,_cb){
      client.send(0,"get_required_fees",[ops,id],_cb);
    };
    client.get_proposed_transactions = function(id,_cb){
      client.send(0,"get_proposed_transactions",[id],_cb);
    };
    client.get_blinded_balances = function(commitments,_cb){
      client.send(0,"get_blinded_balances",[commitments],_cb);
    };

    // Return without errors
    cb(false,client);
  });
};
exports.createWitnessClient = createWitnessClient;
