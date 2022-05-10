import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { MyProgram } from "../target/types/my_program";

describe("my_program", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.MyProgram as Program<MyProgram>;

  // Tạo địa chỉ thuê
  const myAccount = anchor.web3.Keypair.generate();

  it("Is initialized!", async () => {
     // Add your test here.
    // const tx = await program.methods.initialize().rpc();
    // console.log("Your transaction signature", tx);
   
    const sum_init = new anchor.BN(10);
    const tx = await program.rpc.initialize(sum_init, {
      accounts: {
        myAccount: myAccount.publicKey,
        user: program.provider.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      },
      signers: [myAccount],
    });

    let sumAccountData = await program.account.sumAccount.fetch(myAccount.publicKey);
    console.log("sumAccountData", sumAccountData.sum);
  });
});
