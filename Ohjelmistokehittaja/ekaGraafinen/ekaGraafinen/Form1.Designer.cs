
namespace ekaGraafinen
{
    partial class LomakeFM
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
            this.painikeBT = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // OtsikkoLB
            // 
            this.OtsikkoLB.AutoSize = true;
            this.OtsikkoLB.Location = new System.Drawing.Point(13, 13);
            this.OtsikkoLB.Name = "OtsikkoLB";
            this.OtsikkoLB.Size = new System.Drawing.Size(0, 17);
            this.OtsikkoLB.TabIndex = 0;
            // 
            // painikeBT
            // 
            this.painikeBT.Location = new System.Drawing.Point(33, 107);
            this.painikeBT.Name = "painikeBT";
            this.painikeBT.Size = new System.Drawing.Size(142, 23);
            this.painikeBT.TabIndex = 1;
            this.painikeBT.Text = "Vaihda teksti";
            this.painikeBT.UseVisualStyleBackColor = true;
            this.painikeBT.Click += new System.EventHandler(this.painikeBT_Click);
            // 
            // LomakeFM
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.painikeBT);
            this.Controls.Add(this.OtsikkoLB);
            this.Name = "LomakeFM";
            this.Text = "Heippa Maailma";
            this.Load += new System.EventHandler(this.LomakeFM_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label OtsikkoLB;
        private System.Windows.Forms.Button painikeBT;
    }
}

