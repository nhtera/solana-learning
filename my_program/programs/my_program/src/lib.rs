use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod my_program {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, sum_init: u64) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    // Địa chỉ thuê
    #[account(init, payer = user, space = 8 + 8)]
    pub my_account: Account<'info, SumAccount>,

    // Người trả phí giao dịch
    #[account(mut)]
    pub user: Signer<'info>,

    // Địa chỉ chương trình giúp thuê tài khoản
    pub system_program: Program<'info, System>,
}

 
#[account]
pub struct SumAccount {
    pub sum: u64,
}