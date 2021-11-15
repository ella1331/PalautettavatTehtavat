
namespace TokaGraafinen
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.OtsikkoLB = new System.Windows.Forms.Label();
            this.PainikeBT = new System.Windows.Forms.Button();
            this.tekstiTB = new System.Windows.Forms.TextBox();
            this.ohjetekstiLB = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // OtsikkoLB
            // 
            this.OtsikkoLB.AutoSize = true;
            this.OtsikkoLB.Location = new System.Drawing.Point(22, 236);
            this.OtsikkoLB.Name = "OtsikkoLB";
            this.OtsikkoLB.Size = new System.Drawing.Size(0, 17);
            this.OtsikkoLB.TabIndex = 0;
            this.OtsikkoLB.Visible = false;
            // 
            // PainikeBT
            // 
            this.PainikeBT.Location = new System.Drawing.Point(25, 140);
            this.PainikeBT.Name = "PainikeBT";
            this.PainikeBT.Size = new System.Drawing.Size(214, 47);
            this.PainikeBT.TabIndex = 1;
            this.PainikeBT.Text = "Vaihda teksti";
            this.PainikeBT.UseVisualStyleBackColor = true;
            this.PainikeBT.Click += new System.EventHandler(this.PainikeBT_Click);
            // 
            // tekstiTB
            // 
            this.tekstiTB.Location = new System.Drawing.Point(25, 66);
            this.tekstiTB.Name = "tekstiTB";
            this.tekstiTB.Size = new System.Drawing.Size(227, 22);
            this.tekstiTB.TabIndex = 2;
            this.tekstiTB.TextChanged += new System.EventHandler(this.tekstiTB_TextChanged);
            // 
            // ohjetekstiLB
            // 
            this.ohjetekstiLB.AutoSize = true;
            this.ohjetekstiLB.Location = new System.Drawing.Point(22, 27);
            this.ohjetekstiLB.Name = "ohjetekstiLB";
            this.ohjetekstiLB.Size = new System.Drawing.Size(89, 17);
            this.ohjetekstiLB.TabIndex = 3;
            this.ohjetekstiLB.Text = "Kirjoita jotain";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.ohjetekstiLB);
            this.Controls.Add(this.tekstiTB);
            this.Controls.Add(this.PainikeBT);
            this.Controls.Add(this.OtsikkoLB);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label OtsikkoLB;
        private System.Windows.Forms.Button PainikeBT;
        private System.Windows.Forms.TextBox tekstiTB;
        private System.Windows.Forms.Label ohjetekstiLB;
    }
}

